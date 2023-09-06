/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
    borderWidth: {
      3: "3px", // You can adjust the width as needed
    },
    borderColor: {
      black: "#000", // Define your custom border color
    },
    borderStyle: {
      dotted: "dotted", // Define the 'dotted' border style
    },
  },
};
