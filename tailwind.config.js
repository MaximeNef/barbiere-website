/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        default: "#646464",
      },
      boxShadow: {
        cardcta: "3px 4px 20px rgba(76, 73, 85, 0.2)",
        cardinfo: "3px 4px 20px rgba(76, 73, 85, 0.2)",
        cardAvis: " 2px 4px 10px 2px rgba(55, 71, 79, 0.3)",
        cardDetails: "2px 4px 6px 2px rgba(100, 100, 100, 0.1)",
        cardTeam: "  25px 25px 50px -12px rgb(0 0 0 / 0.25);",
        cardChiffre: "0 0 6px rgb(0 0 0 / 16%);",
      },
    },
  },
  plugins: [],
};
