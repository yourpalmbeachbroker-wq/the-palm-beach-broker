/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#2D4A3E',
        'forest-dark': '#1e3329',
        gold: '#C9A84C',
        'gold-light': '#e0be7a',
        cream: '#F5F0E8',
        'warm-gray': '#8A8178',
        'warm-gray-light': '#b5ada6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6) 100%)',
      },
    },
  },
  plugins: [],
};
