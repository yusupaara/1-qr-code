/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tm-grey': '#d2deec',
      },
      fontFamily: {
        gabarito: ['Gabarito', 'Sans-serif'],
      }
    },
  },
  plugins: [],
}

