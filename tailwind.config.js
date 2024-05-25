/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        role : {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation : {
        role : 'role'
      },
      backgroundImage : {
        'mum_and_girl': "url:('img/mum_and_girl.png')",
        'parallax' : 'url:("../img/transi.png")'
      },
      dropShadow : {
        'merci' : '0 2px 3px rgb(255, 89, 55, 0.8)',
      },
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
  plugins: [function({ addUtilities }) {
    const newUtilities = {
      'html.lenis': {
        height: 'auto',
      },
      '.lenis.lenis-smooth': {
        scrollBehavior: 'auto !important',
      },
      '.lenis.lenis-smooth [data-lenis-prevent]': {
        overscrollBehavior: 'contain',
      },
      '.lenis.lenis-stopped': {
        overflow: 'hidden',
      },
      '.lenis.lenis-scrolling iframe': {
        pointerEvents: 'none',
      },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
};
