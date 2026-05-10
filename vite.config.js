import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works at any subpath on Hostinger.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
