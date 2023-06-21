/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: "#5F7ADB",
      secondary: "#A2B2EE",
      silver: "#FCF7FA",
      blush: "#EA638C",
      dark: "#2D3363",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -60px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
