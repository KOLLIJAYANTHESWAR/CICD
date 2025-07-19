// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/CICD/', // 👈 must match your repo name exactly (case-sensitive)
  plugins: [react()],
})