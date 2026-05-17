/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d6a4f',
          dark: '#1b4332',
          light: '#40916c',
        },
        secondary: {
          DEFAULT: '#e76f51',
          light: '#f4a261',
        }
      },
      fontFamily: {
        hind: ['Hind Siliguri', 'sans-serif'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}