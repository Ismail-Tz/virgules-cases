/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        visby: ['Visby', 'sans-serif'],
        sfpro: ['SF Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}