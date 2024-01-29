/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'text': ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

