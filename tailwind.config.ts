import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        curtain: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0.2',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '0.4',
          },
        },
      },
      animation: {
        curtain: 'curtain 1s ease-in-out forwards', // 👈 `forwards` is the key
      },
    },
  },
  plugins: [],
};

export default config;



