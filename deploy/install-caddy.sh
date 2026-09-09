#!/usr/bin/env bash
set -euo pipefail

config=/home/hermes/stack/caddy/Caddyfile
fragment=/home/hermes/tionport-incoming/Caddyfile
backup="$config.before-tionport-$(date +%Y%m%d-%H%M%S)"
cp -p "$config" "$backup"

# The existing container bind-mounts this file, so preserve its inode.
python3 - "$config" "$fragment" <<'PY'
import pathlib
import sys

config, fragment = map(pathlib.Path, sys.argv[1:])
start, end = '# BEGIN TIONPORT WEBSITE', '# END TIONPORT WEBSITE'
source = config.read_text()
block = start + '\n' + fragment.read_text().rstrip() + '\n' + end
if start in source:
    first, last = source.index(start), source.index(end) + len(end)
    source = source[:first] + block + source[last:]
else:
    source = source.rstrip() + '\n\n' + block + '\n'
config.write_text(source)
PY

if ! docker exec myhermes-caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile; then
    cat "$backup" > "$config"
    echo 'Configuration rejected; previous file restored.' >&2
    exit 1
fi
if ! docker exec myhermes-caddy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile; then
    cat "$backup" > "$config"
    docker exec myhermes-caddy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile
    echo 'Reload failed; previous configuration restored.' >&2
    exit 1
fi
printf 'Caddy configuration backup: %s\n' "$backup"
