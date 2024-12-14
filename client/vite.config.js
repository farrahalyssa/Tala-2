import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@fortawesome/free-solid-svg-icons'],
  },
  server: {
    proxy: {
      '/api': 'https://tala-2-6190a44d1b9d.herokuapp.com/', 
    },
  }
});
