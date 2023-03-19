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
      screens: {
        xs: '480px',
      },
    },
    colors: {
      neutral: colors.zinc, // colors.neutral?
      white: colors.white,
      black: colors.black,
      primary: "#ff9000",
    },
  },
  plugins: [],
}
