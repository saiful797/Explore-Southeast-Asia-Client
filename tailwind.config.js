/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DancingScript:['Dancing Script','cursive'],
        Tangerine:['Tangerine','cursive'],
      }
    },
  },
  plugins: [require("daisyui")],
}

