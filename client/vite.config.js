import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@fortawesome/free-solid-svg-icons'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://tala-2.vercel.app',
        changeOrigin: true, // Ensures the Host header is rewritten
        secure: true, // Set to false if HTTPS has self-signed certificates
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite path if needed
      },
    },
  },
  
});
