module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#CDA855',
        green: {
          'light': '#48BF84',
          'dark': '#0F2130',
        }
      },
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'],
        'dancing-script' : ['Dancing Script', 'cursive'],
        'shojumaru' : ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
