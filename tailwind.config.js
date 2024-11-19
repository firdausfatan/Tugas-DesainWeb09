/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff8000', 
        secondary: '#47c7fc', // Warna kuning khusus
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },  
    },
  },
  plugins: [],
}

