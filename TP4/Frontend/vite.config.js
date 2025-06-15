import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root:'Public',
  plugins: [react()],
  server: {
    port: 3001,
  },
})