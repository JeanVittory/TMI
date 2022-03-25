module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1024px', 
    },
    extend: {
      fontFamily:{
        openSans: "'Open Sans', sans-serif",
      },
      colors:{
        selectedColor: '#1A374D'
      },
    },
  },
  plugins: [],
}
