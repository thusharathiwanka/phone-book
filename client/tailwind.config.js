/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        hide: {
          to: { visibility: 'hidden', width: 0, height: 0 },
        },
      },
      animation: { hide: 'hide 1s ease-in-out 2s' },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
