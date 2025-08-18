import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    // Otimizações para SEO e performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    // Minificação
    minify: 'terser',
    // Geração de source maps para produção
    sourcemap: false,
    // Otimização de assets
    assetsInlineLimit: 4096,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Otimizações de desenvolvimento
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
