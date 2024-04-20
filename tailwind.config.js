/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline-bottom': '0 2px 0 0 rgba(59, 130, 246, 0.5)',
      }
    },
  },
  plugins: [],
}