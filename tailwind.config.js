/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "m-black": "#252422",
        "m-grey": "#1E1E1E",
        "m-orange": "#E8850D",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        source: ["SourceSans3", "sans-serif"],
        courier: ["CourierPrime", "monospace"],
      },
    },
  },
  plugins: [],
};
