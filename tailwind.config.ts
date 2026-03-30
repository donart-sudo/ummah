import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#064E3B',
          900: '#0F3D3E',
          800: '#115E4A',
          700: '#167A5E',
        },
        gold: {
          400: '#E8C872',
          500: '#D4A843',
          600: '#B8912E',
          700: '#9A7620',
        },
        cream: {
          50: '#FFFEF7',
          100: '#FFF9E8',
          200: '#FFF3D1',
        },
        night: {
          900: '#1A1A2E',
          800: '#16213E',
          700: '#1E2A4A',
        },
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
