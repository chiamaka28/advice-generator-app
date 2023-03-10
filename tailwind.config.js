/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: { 
      colors: {
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
      'Grayish-Blue': 'hsl(217, 19%, 38%)',
      'Dark-Grayish-Blue': 'hsl(217, 19%, 24%)',
      'Dark-Blue': 'hsl(218, 23%, 16%)',
    },
    backgroundImage: {
      'mobile-pattern': "url('/images/pattern-divider-mobile.svg')",
      'hero-pattern': "url('/images/pattern-divider-desktop.svg')"
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    screens: {
      'md': '470px',
    },
  },
  },
  plugins: [],
}
