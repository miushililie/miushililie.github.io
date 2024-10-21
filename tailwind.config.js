/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right" : {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        "slide-in-left" : {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation : {
        fadeindown : 'fade-in-down 1s ease-in 0.25s 1',
        'slide-in-right' : 'slide-in-right 5s ease-out forwards',
        'slide-in-left' : 'slide-in-left 5s ease-out forwards'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: ["cupcake"]
  }
}

