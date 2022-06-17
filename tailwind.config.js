/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cryptic-cyan': '#7ec9f5',
        'cryptic-blue':'#3957ed',

      }
    },
  },
  plugins: [],
}
