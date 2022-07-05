const twColors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      ...twColors,
    },
  },
  plugins: [],
  prefix: 'docs-',
}
