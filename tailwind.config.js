/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#FAF2E6', // Soft ivory-beige (luxurious & warm)
        secondary: '#1E1E1E', // Deep charcoal (strong & professional)
        accent:    '#005E6E', // Deep ocean teal (marine + modern luxury feel)
        background:'#F5F5F5', // Light grey for clean contrast with primary
        text:      '#333333', // Dark grey for high readability on light background
      },
      fontFamily: {
        sans: [],
      },
    },
  },
  plugins: [],
}