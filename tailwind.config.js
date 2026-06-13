/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warmBg: '#F9F6F0',
        deepPink: '#C8336B',
        brightPink: '#D94E7B',
        accentYellow: '#E8B11C',
        darkText: '#2B2B2B',
        mutedOlive: '#7A7A52',
        lavender: '#B084CC',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
        handwritten: ['Caveat', 'Pacifico', 'cursive'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.2' }],
        'display-lg': ['5rem', { lineHeight: '1.1' }],
        'display-xl': ['6rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
