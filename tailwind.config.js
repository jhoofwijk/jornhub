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
        heartbeat: {
          "0%, 70%": { transform: "scale(1)" },
          "35%": { transform: "scale(1.2)" },
        },
        fadeinout: {
          "0%, 50%, 100%": { opacity: 0 },
          "15%, 35%": { opacity: 1 },
        }
      },
      animation: {
        flicker: "flicker 0.7s infinite",
        heartbeat: "heartbeat 1s infinite",
        fadeinout: "fadeinout 20s infinite ease-in-out",
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
