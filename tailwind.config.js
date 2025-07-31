// tailwind.config.ts
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // ✅ this uses system preference (no class="dark" needed)
  theme: {
    extend: {},
  },
  plugins: [],
};
