/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "heading-2": [
          "56px",
          {
            lineHeight: "61.6px",
            fontWeight: 800,
          },
        ],
        "heading-5": [
          "32px",
          {
            lineHeight: "35.2px",
            fontWeight: 700,
          },
        ],
        "heading-6": [
          "24px",
          {
            lineHeight: "26.4px",
            fontWeight: 700,
          },
        ],
        "subtitle-xl": [
          "20px",
          {
            lineHeight: "22px",
            fontWeight: 500,
          },
        ],
        "button-m": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "button-l": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: 500,
          },
        ],
        "button-xl": [
          "24px",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        "body-l": [
          "18px",
          {
            lineHeight: "28.8px",
          },
        ],
      },
    },
  },
  plugins: [],
};
