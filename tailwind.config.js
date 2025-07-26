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
      keyframes: {
        scrollX1: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scrollX2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 10s linear infinite',
        'scrollX1': 'scrollX1 15s linear infinite',
        'scrollX2': 'scrollX2 15s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.pause-on-hover:hover': {
          animationPlayState: 'paused',
        },
      });
    },
  ],
};
