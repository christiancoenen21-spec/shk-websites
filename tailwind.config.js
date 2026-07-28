import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          primary: '#0f4c81',
          accent: '#06b6d4',
        },
      },
      boxShadow: {
        'soft-lg': '0 15px 40px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [],
};
