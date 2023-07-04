/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "daisy-green": "rgba(27,199,179,1)",
        "react-blue": "rgba(97,218,251,1)",
        "neutral-dark": "rgba(38,46,56,1)",
        "neutral-medium": "rgba(164,168,172,1)",
        "neutral-light": "rgba(240,240,240,1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
