import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensures all assets are served relative to the root
  build: {
    outDir: 'dist',  // Output directory for production build
    assetsDir: 'assets',  // Directory for assets (images, styles, etc.)
  },
});
