import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Altere "formulario-ppu" para o nome exato do seu repositorio GitHub
  base: "/formulario-ppu/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        // Nomes de arquivo deterministicos para o cache do browser
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
