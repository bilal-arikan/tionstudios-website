import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        services: fileURLToPath(new URL('./hizmetler/index.html', import.meta.url)),
        games: fileURLToPath(new URL('./oyunlar/index.html', import.meta.url)),
        about: fileURLToPath(new URL('./hakkimizda/index.html', import.meta.url)),
        contact: fileURLToPath(new URL('./iletisim/index.html', import.meta.url)),
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./privacy-policy.html', import.meta.url)),
        terms: fileURLToPath(new URL('./terms-of-services.html', import.meta.url)),
      },
    },
  },
})
