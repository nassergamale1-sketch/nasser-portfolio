import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Static single-page portfolio — builds to plain files in /dist,
// deployable on Netlify / Vercel / GitHub Pages with no server.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
