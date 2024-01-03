/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"], 
  theme: {    
    screens: {
      'sm': {'max': '639px'},

      'md': {'max': '767px'},

      'lg': {'max': '1023px'},

      'xl': {'max': '1279px'},
    },
    fontFamily: {
      'sans': ['Ubuntu', 'Sans-serif']
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
    colors: {
      "gray" : "#A3A6AB",
      "white" : "#ffffff",
      "light-blue":"#F7FAFC",
      "hover-green":"#6CD2C6",
      "light-green":"#90E2DC",
      "light-purple":"#4C51BF",
      "light-gray":"#4A5568",
      "light-purple2":"#C3DAFD",
      "purple-dark":"#4C51BF",
      "lightest-green":"#C6F6D5",
      "carret":"#F7D7D7",
      "dark-carret":"#EA818A",
      "dark-purple":"#5A67D8",
      "dark-green":"#58A26A",
      "dark-yellow":"#D69E2E",
      "dark-light-red":"#E5403E",
      "dark-pink":"#D64E8C"
    }
  },
  variants: {},
  // plugins: [
  //   require('tailwindcss-animatecss')({
  //     settings: {
  //       animatedSpeed: 1000,
  //       heartBeatSpeed: 1000,
  //       hingeSpeed: 2000,
  //       bounceInSpeed: 750,
  //       bounceOutSpeed: 750,
  //       animationDelaySpeed: 1000
  //     },
  //     variants: ['responsive'],
  //   }),
  // ],
}

