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
      screens: {
        '1056': '1056px',  // Custom breakpoint for exactly 1056px
        '750': '750px',
        '450': '450px',
      },
    },
  },
  plugins: [],
}