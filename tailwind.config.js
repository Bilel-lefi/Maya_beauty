/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000 ",
        secondary: "#fff ",
        tertiary: "#ffb15e",
      },
    },
    fontFamily: {
      cursive: ["cursive"],
      comfortaa: ["Comfortaa"],
      serif: ["serif"],
      cursive: ['"Dancing Script"', "cursive"],
    },
  },
  plugins: [],
};
