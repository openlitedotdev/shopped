import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['@openlite/ui'],
    },
  },
  plugins: [react()],
})
