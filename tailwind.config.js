const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './storage/framework/views/*.php',
    './resources/js/**/*.vue',
    './resources/views/**/*.blade.php'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
