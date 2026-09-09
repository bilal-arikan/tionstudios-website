#!/usr/bin/env bash
set -euo pipefail

release="${1:?A release timestamp is required}"
[[ "$release" =~ ^[0-9]{8}-[0-9]{6}$ ]] || { echo 'Invalid release name.' >&2; exit 1; }
root=/var/www/tionport
destination="$root/releases/$release"
archive="/home/hermes/tionport-incoming/$release.tar.gz"

mkdir -p "$destination"
tar -xzf "$archive" -C "$destination" --no-same-owner
test -s "$destination/index.html"
test -s "$destination/en/services/index.html"
test -s "$destination/legal/privacy-source.html"

# Retain older hashed assets so open tabs survive an atomic release switch.
if [[ -d "$root/current/assets" ]]; then
    cp -an "$root/current/assets/." "$destination/assets/"
fi
chmod -R a+rX "$destination"
previous=$(readlink "$root/current" || true)
if [[ -n "$previous" ]]; then
    ln -sfn "$previous" "$root/previous.next"
    mv -Tf "$root/previous.next" "$root/previous"
fi
ln -sfn "$destination" "$root/current.next"
mv -Tf "$root/current.next" "$root/current"
printf 'Current release: %s\nPrevious release: %s\n' "$destination" "$previous"
