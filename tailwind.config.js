/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        aegean: '#1A365D',
        gold: '#D4AF37',
        sand: '#F5E6D3',
        turquoise: '#1E7A8A',
        terracotta: '#C2654A',
        crimson: '#8B1A1A',
        ink: '#2C1810',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
