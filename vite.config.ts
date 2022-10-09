import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      Src: fileURLToPath(new URL('./src', import.meta.url)),
      Views: fileURLToPath(new URL('./src/views', import.meta.url)),
      Server: fileURLToPath(new URL('./src/server', import.meta.url)),
      Plugin: fileURLToPath(new URL('./src/plugin', import.meta.url)),
      Config: fileURLToPath(new URL('./src/config', import.meta.url)),
      Sass: fileURLToPath(new URL('./src/sass', import.meta.url))
    }
  }
})
