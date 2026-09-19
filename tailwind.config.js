/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Refined evolution of the original indigo: same family, less shouty.
        brand: {
          50: '#f4f5ff',
          100: '#e9ebfe',
          200: '#d5d8fc',
          300: '#b4b9f7',
          400: '#9093ef',
          500: '#7270e4',
          600: '#5e55d6',
          700: '#4f43ba',
          800: '#423a95',
          900: '#393376',
          950: '#221e46',
        },
        // Cool tinted neutrals — never pure black.
        ink: {
          50: '#f8f9fb',
          100: '#f1f2f6',
          200: '#e4e6ed',
          300: '#cfd3dd',
          400: '#a3a9b9',
          500: '#767d91',
          600: '#565d70',
          700: '#414759',
          800: '#2b3042',
          900: '#1b1f2e',
          950: '#11131d',
        },
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.033em' }],
        'display-lg': ['clamp(2.15rem, 4.4vw, 3.25rem)', { lineHeight: '1.06', letterSpacing: '-0.028em' }],
        'display-md': ['clamp(1.7rem, 3vw, 2.25rem)', { lineHeight: '1.14', letterSpacing: '-0.022em' }],
        'display-sm': ['1.375rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        '4xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(17 19 29 / 0.04), 0 4px 16px -8px rgb(17 19 29 / 0.10)',
        lift: '0 2px 6px -1px rgb(17 19 29 / 0.06), 0 16px 40px -20px rgb(17 19 29 / 0.20)',
        glow: '0 14px 34px -14px rgb(94 85 214 / 0.50)',
        hairline: 'inset 0 1px 0 0 rgb(255 255 255 / 0.07)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgb(17 19 29 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(17 19 29 / 0.045) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translate3d(0, 14px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -14px, 0) scale(1.03)' },
        },
        shimmer: {
          '100%': { transform: 'translate3d(100%, 0, 0)' },
        },
        'sweep-in': {
          from: { opacity: '0', transform: 'translate3d(-8px, 0, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        drift: 'drift 11s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite',
        'sweep-in': 'sweep-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
