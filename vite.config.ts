import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Criamos um "atalho" chamado /api
      "/api": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        secure: false,
        // O rewrite remove o '/api' da URL antes de mandar para a Econverse
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
