import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves project sites from /<repo-name>/
  // Use "/" for local dev, and "/e-plantShopping/" for the deployed site.
  base: command === 'serve' ? '/' : '/e-plantShopping/',
  plugins: [react()],
}))
