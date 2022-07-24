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
        primary: '#6A7071',
        'hover': '#222B35',
      },
      colors: {
        black: '#0F1012',
        dark: '#0E1014',
      },
      backgroundImage: {
        'houses': "url('/assets/images/houses.jpg')",
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
