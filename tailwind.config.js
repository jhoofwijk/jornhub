/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      keyframes: {
        flicker: {
          "0%, 100%": { borderColor: "#f00" },
          "50%": { borderColor: "#0f0" },
        },
      },
      animation: {
        flicker: "flicker 0.7s infinite",
      },
      colors: {
        primary: colors.zinc,
        secondary: "#ff9000",
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
