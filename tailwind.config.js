/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeOut: {
          "100%": { opacity: "0", visibility: "hidden" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s ease-out",
        fadeOut: "fadeOut 1s ease-out 2.5s forwards",
        fadeIn: "fadeIn 1s ease-out 3s forwards",
      },
    },
  },
  plugins: [],
};