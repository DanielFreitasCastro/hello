/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#F6DC4A',
      secondary: '#3498DB',
      highlight: '#E74C3C',
      black: '#2A2A2A',
      'black-500': '#222222',
      'default-color': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        'content-max': '1200px',
      },
      keyframes: {
        rubberBand: {
          '0%': { transform: 'scaleX(1)' },
          '40%': { transform: 'scaleX(1.12) scaleY(0.75)' },
          '55%': { transform: 'scaleX(0.85) scaleY(1)' },
          '65%': { transform: 'scaleX(1.09) scaleY(0.85)' },
          '75%': { transform: 'scaleX(0.9)  scaleY(1)' },
          '90%': { transform: 'scaleX(1.05) scaleY(0.95)' },
          '100%': { transform: 'scaleX(1) scaleY(1)' },
        },
      },
      animation: {
        rubberBand: 'rubberBand 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
