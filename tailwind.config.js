/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./portofolio/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
          'eegyoColorSecondary' : '#FF6584',
          'eegyoColorPrimary' : '#fff32c'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
