/** @type {import('tailwindcss').Config} */

// The whole UI is limited to these three brand colours:
//   navy  #0d3b66
//   cream #faf0ca
//   sage  #a1c181
// Every Tailwind colour family used in the project is mapped back to one of
// these three scales, so no other hue can appear in the frontend.
const navy = {
  50: '#eef5fb',
  100: '#d9e8f4',
  200: '#b8d2e9',
  300: '#8fb6d9',
  400: '#6497c4',
  500: '#3f7aa8',
  600: '#25608c',
  700: '#174d76',
  800: '#0d3b66',
  900: '#0a2f53',
  950: '#061e36',
}

const cream = {
  50: '#fffdf4',
  100: '#faf0ca',
  200: '#f5e6ad',
  300: '#eeda92',
  400: '#e4c96f',
  500: '#d8b54c',
  600: '#c39a35',
  700: '#a1792b',
  800: '#7d5c25',
  900: '#5c4420',
  950: '#332511',
}

const sage = {
  50: '#f4f8f0',
  100: '#e6efdd',
  200: '#cddfbd',
  300: '#b3cf9e',
  400: '#a1c181',
  500: '#86ab64',
  600: '#6b8f4d',
  700: '#55723f',
  800: '#465c36',
  900: '#3a4c2f',
  950: '#1e2917',
}

// Neutral surfaces are shades of the navy brand colour.
const slate = {
  50: '#f6f9fc',
  100: '#e9f0f7',
  200: '#d3e1ee',
  300: '#b6cfe3',
  400: '#9fb8ce',
  500: '#7e9bb4',
  600: '#5e7b93',
  700: '#40607a',
  800: '#1c4a72',
  900: '#0d3b66',
  950: '#061e36',
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: cream[100],
      black: navy[950],

      // Brand scales
      primary: navy,
      secondary: sage,
      accent: cream,

      // Neutral surfaces
      gray: slate,
      slate: slate,
      zinc: slate,
      neutral: slate,
      stone: slate,

      // Cool families -> navy
      blue: navy,
      indigo: navy,
      cyan: navy,
      sky: navy,
      teal: navy,

      // Green families -> sage
      green: sage,
      emerald: sage,
      lime: sage,

      // Warm / accent families -> cream
      red: cream,
      orange: cream,
      yellow: cream,
      amber: cream,

      // Previously pink/purple accents -> sage
      purple: sage,
      pink: sage,
      rose: sage,

      // Direct brand names (e.g. bg-navy-800, text-cream-100, bg-sage-400)
      navy: navy,
      cream: cream,
      sage: sage,
    },
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
