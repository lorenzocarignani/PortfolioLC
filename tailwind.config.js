/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-charger": "border-charger 1.5s infinite",
      },
      colors: {
        primary: "#4FC153",
        mute: "#A1A1AA",
        gris: "#27272A",
        white: "#FAFAFA",
        negro: "#09090B",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      dropShadow: {
        red: "2px 4px 4px #4FC153",
      },
    },
  },
  plugins: [],
};
