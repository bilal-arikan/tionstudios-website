import { fileURLToPath, URL } from 'node:url'
import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

/**
 * Every index.html in the tree is a build entry. Walking the tree keeps the
 * config correct as locales and pages are added, instead of listing 30+ paths.
 */
function htmlEntries(dir = root, found = {}) {
  for (const entry of readdirSync(dir)) {
    if (['node_modules', 'dist', '.git', 'public', 'src', 'scripts', '.github', '.claude'].includes(entry)) continue

    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      htmlEntries(full, found)
    } else if (entry.endsWith('.html')) {
      const name = relative(root, full).replace(/\\/g, '/').replace(/\.html$/, '').replace(/\//g, '-')
      found[name || 'main'] = full
    }
  }
  return found
}

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: htmlEntries(),
    },
  },
})
