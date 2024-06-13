/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fcd414',
        secondary: '#ec5424',
        tertiary: '#219C90',
        hitam: '#0C1844',
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
          md: '2rem',
          sm: '3rem',
        }
      },
    },
  },
  plugins: [],
}

