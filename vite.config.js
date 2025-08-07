import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Configuración para GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        players: resolve(__dirname, 'players/index.html'),
      }
    }
  },
  base:'https://juliancz-a.github.io/aoe2-tv' 
})