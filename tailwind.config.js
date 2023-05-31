/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},   
  colors:{
      'primary':'#013A65',
      'secondary':'#F6AF35',
      'black':'#000',
      'white':'#fff',
      bgtransparent:"rgba(0,0,0,0.2)",
      'background':'#cbd5e1'
  },
  },
  plugins: [],
}