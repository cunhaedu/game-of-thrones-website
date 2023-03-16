const { fontFamily } = require('tailwindcss/defaultTheme')

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
      backgroundColor: {
        primary: '#888',
      },
      borderColor: {
        primary: '#888',
      },
      backgroundImage: {
        'houses': "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('/assets/images/houses.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-cinzel)', ...fontFamily.sans],
        'primary': ['var(--font-cinzel)', ...fontFamily.sans],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite'
      }
    },
    textBorder: {
      'white': '-webkit-text-stroke: 1px red;'
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-hyphens")
  ],
}
