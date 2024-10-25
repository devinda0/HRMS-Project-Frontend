/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        lexend: ['Lexend', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        poppins:['Poppins','sans-serif'],
        inter:['Inter','sans-serif']
      },
      colors:{
        custompurple:'#EDE7F6',
        darkpurple:'#C7C7F1',
        lipurple:'#DEE1E6',
        lightblue:'#F5F1FD',
        txtclr1:'#565D6D',
        highpurple:'#C7C7F1',
        ligreen:'#51F0A42E',
        ash:'#BDC1CA',
        customblue:'#1478EE2E',
        textcolor:'#171A1F',
        bordercolor:'#BDC1CA',
        background1:'#9EBAE2'

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

