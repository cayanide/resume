import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages under https://cayanide.github.io/resume/
export default defineConfig({
  plugins: [react()],
  base: "/resume/",
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
  server: {
    port: 5173,
    open: true,
  },
});
