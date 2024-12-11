import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
  server: {
    open: true,
  },
  // Add this for SPA fallback
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
