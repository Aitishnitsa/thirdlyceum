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
      'lightBlue': '#E9F6FF',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
