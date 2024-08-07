/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'white': '#FFFFFF',
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
