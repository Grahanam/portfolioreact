/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily:'Proxima Nova',
    extend: {
      fontFamily:'Proxima Nova',
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors:{
        'green':'#108954',
        'dark':'#121212',
        'light':'#282828',
        'lightest':'#838383',
        'darkest':'#191414'
      }
    },
  },
  plugins: [],
}
