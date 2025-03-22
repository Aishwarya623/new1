import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import { copyFileSync, existsSync } from "fs";

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

    // ✅ Custom plugin to copy _redirects after build
    {
      name: "copy-redirects",
      closeBundle() {
        const src = path.resolve(__dirname, "_redirects"); // ✅ Source in main folder
        const dest = path.resolve(__dirname, "docs/_redirects"); // ✅ Destination to docs

        // ✅ Check if _redirects file exists before copying
        if (existsSync(src)) {
          try {
            copyFileSync(src, dest);
            console.log("✅ _redirects copied successfully!");
          } catch (err) {
            console.error("❌ Error copying _redirects:", err);
          }
        } else {
          console.warn("⚠️ _redirects file not found. Skipping copy.");
        }
      },
    },
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
