/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Minecraft"', 'sans-serif'],
        audiowide: ['"Audiowide"', 'sans-serif'],
        goodTiming: ['"GoodTiming"', 'sans-serif'],
        wadik: ['"Wadik"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};