module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm':'640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1282px',
      '2xl': '1536px' 
    },
    extend: {
      fontFamily:{
        openSans: "'Open Sans', sans-serif",
        Sans: ['Helvetica', 'Arial', 'sans-serif'],
        Mono: "'PT Mono', monospace"
      },
      colors:{
        selectedColor: '#1A374D'
      },
    },
  },
  plugins: [],
}
