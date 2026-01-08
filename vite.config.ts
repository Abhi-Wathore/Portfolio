import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // 👈 REQUIRED (use your repo name)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
