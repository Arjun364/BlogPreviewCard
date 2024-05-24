/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color":"#F4D04E",
        "secondary-color":"#FFFFFF",
        "primary-textColor":"#111111",
        "secondary-textColor":"#7F7F7F",
      },
      fontFamily:{
        "Figtree": ['Figtree','sans-serif']
      }
    },
  },
  plugins: [],
}

