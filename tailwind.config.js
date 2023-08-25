/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004579',
        primaryMedium: '#3C81A8',
        primaryLight: '#013A65',
        primaryDark: '#002744',
        accent: '#F5AC2F',
        black: '#212427',
        bgtransparent: 'rgba(0,0,0,0.2)',
        background: '#E6F1F6',
      },
    },
  },
  plugins: [],
};
