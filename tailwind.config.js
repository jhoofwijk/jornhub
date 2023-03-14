/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 100%": { borderColor: "#f00" },
          "50%": { borderColor: "#0f0" },
        }
      },
      animation: {
        flicker: "flicker 0.7s infinite"
      }
    },
  },
  plugins: [],
}
