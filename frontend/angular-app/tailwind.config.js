/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,ts}', // adjust this path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        lime: 'rgb(203, 250, 64)', // add custom color
      },
      borderRadius: {
        'block-corner': 'clamp(32px, calc(20.732394366197184px + 3.004694835680751vw), 64px)',
      },
      spacing: {
        'negative-block-corner': 'calc(clamp(32px, calc(20.732394366197184px + 3.004694835680751vw), 64px) * -1)',
        '75': '75%', // aspect ratio
      },
      animation: {
        'slide-up-in': 'slide-up-in 0.5s ease forwards',
      },
      keyframes: {
        'slide-up-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
