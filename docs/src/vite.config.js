import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: false,
    },
    hmr: {
      port: 3010,
    },
  },
});