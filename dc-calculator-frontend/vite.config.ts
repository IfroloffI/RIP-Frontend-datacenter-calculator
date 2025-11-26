import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://192.168.80.89:8080',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});