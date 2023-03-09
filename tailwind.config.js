/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#BA4270",
        secondary: "#36536B",
        accent: "#DA6D97",
        white: "#FBFCFE",
        mirageBlue: "#1B262F",
        lightBlue: "#6C8294",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        dmSerif: ["DM Serif Display", "serif"],
      },
      boxShadow: {
        buttonShadow: "10px 10px 25px -10px rgba(54, 83, 107, 0.25)/30",
      },
      content: {
        // checker: "url('../assets/shared/desktop/icon-check.svg')",
      },
    },
  },
  plugins: [],
};
