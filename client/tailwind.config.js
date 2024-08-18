/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--gray-100));",
        secondary: "#6b21a8",
        tertiary: "#7e22ce",
      },
    },
    screens: {
      'lg': { 'max': '2023px' },
      'sm': { 'max': '1000px' },

    }
  },
  plugins: [],
}
