const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#888',
        'primary-hover': '#FFF',
      },
      colors: {
        black: '#0F1012',
        dark: '#141719',
      },
      backgroundImage: {
        'houses': "url('/assets/images/houses.jpg')",
      },
      fontFamily: {
        'primary': ['GotFont', ...defaultTheme.fontFamily.sans],
      },
    },
    textBorder: {
      'white': '-webkit-text-stroke: 1px red;'
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
