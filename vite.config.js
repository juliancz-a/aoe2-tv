import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Configuración para GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/tu-repositorio/' : '/',
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        players: resolve(__dirname, 'players/index.html'),
      }
    },
    outDir: 'dist',
  },
  
  server: {
    open: '/'
  }
})