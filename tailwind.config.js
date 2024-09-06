/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-b': "url('/assets/image/hero.png')",
        'hero-pattern-b': "url('/assets/image/smaller.png')",
      }
    },
  },
  plugins: [],
}

