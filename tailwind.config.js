/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        "balloons": "url('./assets/balloonsBLUE.png')",
        "footersky": "url('./assets/footersky.png')",
        "projects": "url('./assets/work3backgrouns.png')",
      },

      colors: {
        "blue": "#006E7F",
        "ocher": "#d6af67",
        "red": "#b22727",
        "lightblue": "#739eee",

      },
    },
  },
  plugins: [],
}
