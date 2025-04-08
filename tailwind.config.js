/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E1E67F",
        mute: "#A1A1AA",
        gray: "#27272A",
        white: "#FAFAFA",
        negro: "#09090B",
      },
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
      },
      dropShadow: {
        red: "2px 4px 4px #E1E67F", // o el rojo que usás en primary
      },
    },
  },
  plugins: [],
};
