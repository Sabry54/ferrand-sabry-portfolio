import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0", // Force l'écoute sur toutes les interfaces
    port: 3000, // Port fixe
    strictPort: true, // Empêche le changement de port automatique
    open: true, // Ouvre automatiquement le navigateur
  },
});
