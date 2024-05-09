/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        santepheap: ["Koh Santepheap", "sans-serif"]
      },
      colors: {
        'gradient-start': 'rgba(29, 38, 59, 0.88)',  // 0% - #1D263B with 88% opacity
        'gradient-middle': 'rgba(43, 52, 75, 0.82)', // 41% - #2B344B with 82% opacity
        'gradient-end': 'rgba(181, 200, 251, 0.20)',  // 100% - #B5C8FB with 20% opacity
        'cyanish': '#75c7b9',
        'darkish': '#1D263B',
        'creamish': '#D9D9D9'
      },
      backgroundImage: {
        'bali-welcome-gradient': 'linear-gradient(to top right, rgba(29, 38, 59, 0.88) 0%, rgba(43, 52, 75, 0.82) 41%, rgba(181, 200, 251, 0.20) 100%)'
      }
    },
  },
  plugins: [],
}