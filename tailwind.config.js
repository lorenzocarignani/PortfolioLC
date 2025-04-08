/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4FC153",
        mute: "#A1A1AA",
        gris: "#27272A",
        white: "#FAFAFA",
        negro: "#09090B",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
      },
      dropShadow: {
        red: "2px 4px 4px #4FC153", // o el rojo que usás en primary
      },
    },
  },
  plugins: [],
};
