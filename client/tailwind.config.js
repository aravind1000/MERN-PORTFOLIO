/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: "hsl(var(--gray-100))",
        secondary: "#6b21a8",
        tertiary: "#7e22ce",

        // Dark mode colors
        darkPrimary: "hsl(var(--gray-900))",
        darkSecondary: "#4c1d95",
        darkTertiary: "#5b21b6",
        darkBg: "#181C14",
        darkText: "#a0aec0",
        darkAccent: "#9f7aea",
      },
    },
    screens: {
      'lg': { 'max': '2023px' },
      'sm': { 'max': '1000px' },
    },
  },
  plugins: [],
}
