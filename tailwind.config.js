/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'buttonShadow': '0px 0px 7px 1px rgba(120,120,120,0.3)',
        'navShadow': '0px 1px 25px 0px rgba(120,120,120,0.2)',
      }
    }
  },
  plugins: [],
}