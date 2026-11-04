import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


const productsProxy = {
  '/api/produtos': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: () =>
      '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: { proxy: productsProxy },
  preview: { proxy: productsProxy },
});
