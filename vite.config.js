import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { generatedDir, htmlEntries, outputDir, projectRoot, publicDir } from './scripts/site-paths.mjs'

export default defineConfig({
  root: generatedDir,
  publicDir,
  resolve: { alias: { '/src': join(projectRoot, 'src') } },
  server: { fs: { allow: [projectRoot] } },
  plugins: [
    react(),
    {
      name: 'generated-sitemap',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: readFileSync(join(generatedDir, 'sitemap.xml'), 'utf8'),
        })
      },
    },
  ],
  build: {
    outDir: outputDir,
    emptyOutDir: true,
    rollupOptions: { input: htmlEntries },
  },
})
