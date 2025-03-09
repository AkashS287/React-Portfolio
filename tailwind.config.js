/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      nerko : ['Nerko One','serif'],
      hero: ["Sriracha", "cursive"],
    }
  },
  plugins: [],
}

