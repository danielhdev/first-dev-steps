/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        backgroundImage: {
          "heroimage": "url('./assets/balloonsBLUE.png')",
          "workimage": "url('./assets/work1backround.png')",
          "footerimage": "url('./assets/footersky.png')",
},

},
  },
  plugins: [],
}
