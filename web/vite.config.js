import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    force: true,
    hmr: {
      overlay: true
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
