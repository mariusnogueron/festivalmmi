/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'menu' : '3px 3px',
      },
      fontFamily: {
        'nunito' : ['Nunito Sans', 'sans-serif'],
        'instrument': ['"Instrument Serif", serif;'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      colors: {
        'beige': '#F5EEDE',
        'orange': '#FF5937',
        'red': '#DC2E31',
      },
    },
  },
  plugins: [],
};
