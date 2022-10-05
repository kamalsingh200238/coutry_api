/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "elements-d": "#2b3945",
        "background-d": "#202c37",
        "background-l": "#fafafa",
        "light-text": "#111517",
        "light-input": "#858585",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
