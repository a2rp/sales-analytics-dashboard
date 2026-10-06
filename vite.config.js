import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/sales-analytics-dashboard/',
  build: {
    sourcemap: false,
  },
  plugins: [react()],
})