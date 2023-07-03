/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary': '#BF0101',
        'secondary': '#7C7A7A',
        'black': '#080708',
        'white': '#EFE1E1'
      },
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false
  }
}

