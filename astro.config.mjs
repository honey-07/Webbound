import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; // Use static adapter for static export

export default defineConfig({
  output: "static", // Enables static site generation
  adapter: vercel(),
  integrations: [react(), tailwind()],
});