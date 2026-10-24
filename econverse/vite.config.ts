import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const econverseProxy = {
  '/api/econverse': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: (path: string) =>
      path.replace(/^\/api\/econverse/, '/teste-front-end/junior/tecnologia/lista-produtos'),
  },
};

export default defineConfig({
  plugins: [react()],
  server: { proxy: econverseProxy },
  preview: { proxy: econverseProxy },
});