/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        backgroundImage: {
          "dumbbell": "url('./assets/dumbbell.png')",
          
},
        colors: {
          "navy": '#050636',
          "teal": '#66b2b2',
          "yellow": '#e6df17',
          "maroon": "#cd0000"

  },
},
  },
  plugins: [],
}
