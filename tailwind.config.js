/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      fontFamily: {
        primary: "rubik",
      },
      colors: {
        gray: "#777D86",
        "placeholder-gray": "#CCCFD5",
        "dark-gray": "#4E5460",
        "darker-gray": "#3C424D",
        "primary-gray": "#3C424D",
        "light-gray": "#B2B6BF",
        "lighter-gray": "#F0F3F7",
        "lightest-gray": "#E1E5ED",
        yellow: "#E2CA44",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        50: "200px",
        75: "300px",
        "25vw": "25vw",
        "28vw": "28.2vw",
        "40vw": "40vw",
        "90vw": "90vw",
        "0.8/2": "40%",
      },
      minWidth: {
        50: "200px",
        75: "300px",
        "25vw": "25vw",
        "28vw": "28.2vw",
        "40vw": "40vw",
        "90vw": "90vw",
      },
      height: {
        50: "200px",
        75: "300px",
        "25vh": "25vh",
        "28vh": "28.2vh",
        "40vw": "40vh",
        "90vw": "90vh",
      },
      scale: {
        85: "0.85",
      },
      padding: {
        4.5: "18px",
      },
      borderWidth: {
        10: "10px",
        12: "12px",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      fontSize: {
        xxs: "0.5rem",
        xxss: "0.45rem",
        "2.5xl": "28px",
      },
      spacing: {
        6.5: "25px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
