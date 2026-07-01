import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the build works served from a domain root (Vercel /
  // Netlify) or from a sub-path (GitHub Pages project site) with no changes.
  base: './',
  plugins: [react()],
});
