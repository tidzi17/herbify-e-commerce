
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      md1200: { max: "1200px" },
      md1000: { max: "1000px" },
      min800: { max: "800px" },
      max800: { min: "801px" },
      min620: { max: "620px" },
      min540: { max: "540px" },
      min450: { max: "450px" },
      min375: { max: "375px" },
      },
      colors:{
        primary: '#0C300D',
        secondary: '#214A0E',
        black: '#222222',
        footerPrimaryP: '#605F5F',
        primaryRed: '#E52626',
        primaryGrey: '#D9D9D9',
        secondaryGrey: '#494A49',
        primaryBg: '#F7F7F7',
        thirdlyGrey: '#E2E2E2',
        textGrey: "#494A49",
      },
      fontFamily:{
        cormorant: ['Cormorant', 'serif'],
        inter: ['Inter', 'sans-serif'],
        italiana: ['Italiana'],
      },
      height: {
        '10vh': '10vh',
      },
    },
  },
  plugins: [],
}

