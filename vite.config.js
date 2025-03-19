import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Autointern/', // Add this line with your repository name
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

