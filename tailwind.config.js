/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'floaty': 'floaty 3s ease-out infinite'
      }
    },
    keyframes: {
      'floaty': {
        '50%': { transform: 'translateY(10px)' }
      }
    }
  },
  plugins: [],
}

