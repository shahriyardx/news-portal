/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{js,css}"],
  theme: {
    extend: {
      transitionDuration: {
        slow: "1s",
      },
    },
  },
  plugins: [],
}
