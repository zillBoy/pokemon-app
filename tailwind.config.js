/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "rubik",
      },
      colors: {
        "dark-gray": "#4E5460",
        "darker-gray": "#3C424D",
        "light-gray": "#B2B6BF",
        "lighter-gray": "#F0F3F7",
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
      },
      minWidth: {
        50: "200px",
        75: "300px",
        "25vw": "25vw",
        "28vw": "28.2vw",
      },
      height: {
        50: "200px",
        75: "300px",
        "25vh": "25vh",
        "28vh": "28.2vh",
      },
      scale: {
        85: "0.85",
      },
    },
  },
  plugins: [],
};
