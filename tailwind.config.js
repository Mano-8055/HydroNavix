/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#FAFAFA',
        secondary: '#0D0812', 
        accent:    '#17A2B8',
        background:'#F5F5F5', 
        text:      '#333333', 
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
}