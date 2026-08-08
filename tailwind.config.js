/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#02040a',
          900: '#050912',
          800: '#0a1120',
          700: '#101a2e',
          600: '#182541',
        },
        bone: {
          DEFAULT: '#e9e6dc',
          dim: '#a9a89e',
        },
        alert: {
          DEFAULT: '#ff3b30',
          dim: '#7a1a15',
        },
        warn: {
          DEFAULT: '#ffcc00',
          dim: '#5c4a00',
        },
        tactical: {
          DEFAULT: '#2bffb0',
          cyan: '#3ee6ff',
        },
      },
      fontFamily: {
        display: ['"Oswald"', '"Bebas Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        body: ['"Barlow"', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(62,230,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(62,230,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
      },
      animation: {
        scan: 'scan 6s linear infinite',
        blink: 'blink 1.4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        radar: 'radar 4s linear infinite',
        marquee: 'marquee 22s linear infinite',
        flicker: 'flicker 6s linear infinite',
      },
    },
  },
  plugins: [],
}
