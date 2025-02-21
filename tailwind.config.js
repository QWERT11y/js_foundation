/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '50px',
        sm: '60px',
        lg: '70px',
        xl: '130px',
        '2xl': '150px',
      },
    },
    extend: {
      footer:"#06266F",
      header:"#2A4480",
      text: "ffffff",
      bg:"#6C8CD5"
    },
  },
  plugins: [],
}