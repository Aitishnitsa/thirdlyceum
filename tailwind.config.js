/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'orange': '#FE7A36',
      'blue': '#3652AD',
      'darkBlue': '#280274',
      'lightBlue': '#B5E1FF',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animated')
  ],
}
