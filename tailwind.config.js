/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
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
        fadeindown : 'fade-in-down 1s ease-in 0.25s 1'
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

