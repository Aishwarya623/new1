import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // ✅ Correct base for GitHub Pages
  base: "/new1/",

  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
  ],

  // ✅ Define path aliases for easier imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },

  // ✅ Set the root directory to "client"
  root: path.resolve(__dirname, "client"),

  build: {
    // ✅ Output to "docs" for GitHub Pages
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: true, // Clean output directory before building
    assetsDir: "assets", // Store built assets in "assets" folder
  },
});
