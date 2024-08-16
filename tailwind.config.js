/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#252422",
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
