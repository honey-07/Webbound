import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; // ✅ Updated static adapter import

export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [react(), tailwind()],
});
