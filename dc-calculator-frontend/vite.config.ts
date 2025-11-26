import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import mkcert from 'vite-plugin-mkcert';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: '/dc-calculator-frontend/',

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        name: 'DC Calculator',
        short_name: 'DC Calc',
        start_url: '/dc-calculator-frontend/',
        scope: '/dc-calculator-frontend/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0072ce',
        description: 'Калькулятор мощности дата-центра',
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
    mkcert(),
  ],

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt')),
    },
  },
});