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
        retro: {
          beige: '#F5F5DC',
          'dusty-pink': '#E8B4B8',
          'muted-blue': '#B8D4E3',
          cream: '#FFFDD0',
          'light-brown': '#D2B48C',
          'dark-beige': '#E6D7C3',
          'dark-pink': '#C48490',
          'dark-blue': '#8BA9B8',
          'dark-cream': '#E6E6B8',
          'dark-brown': '#B8A088',
        }
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'retro': ['VT323', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pixel-fade': 'pixelFade 0.3s ease-in-out',
        'window-open': 'windowOpen 0.4s ease-out',
        'glitch': 'glitch 0.3s ease-in-out',
      },
      keyframes: {
        pixelFade: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        windowOpen: {
          '0%': { opacity: '0', transform: 'translateY(-20px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      },
      boxShadow: {
        'retro': '4px 4px 0px rgba(0, 0, 0, 0.3)',
        'retro-hover': '6px 6px 0px rgba(0, 0, 0, 0.4)',
        'retro-inset': 'inset 2px 2px 4px rgba(0, 0, 0, 0.2)',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      }
    },
  },
  plugins: [],
}
