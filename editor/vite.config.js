import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
      host: '0.0.0.0',
  },
  /*
  */
  /*
  resolve: {
    alias: {
      '@bagatell/core': path.resolve(__dirname, '../core/src'),
      '@bagatell/web-components': path.resolve(__dirname, '../web-components/src'),
    },
  },
  */
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'lib-index.js'),
      formats: ['es'],
      fileName: 'bagatell-editor-app.js',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})
