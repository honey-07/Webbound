// tailwind.config.ts
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],

  darkMode: 'media', // ✅ this uses system preference (no class="dark" needed)
  theme: {
    extend: {},
  },
  plugins: [],
};
