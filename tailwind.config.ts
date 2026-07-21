import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fleet: {
          black: '#050505',
          charcoal: '#111111',
          gold: '#d6a13d',
          amber: '#f5c96b',
          cream: '#fff7df',
        },
      },
      boxShadow: {
        gold: '0 24px 80px rgba(214, 161, 61, 0.22)',
      },
    },
  },
  plugins: [],
};

export default config;
