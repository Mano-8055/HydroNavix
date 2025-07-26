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
        LightBlue: '#4682B4',
        DarkBlue: '#0B5384',
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}