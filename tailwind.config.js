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
          primary: 'var(--color-brand-primary)',
          'primary-hover': 'var(--color-brand-primary-hover)',
          accent: 'var(--color-brand-accent)',
        },
      },
      boxShadow: {
        'soft-lg': 'var(--shadow-default)',
        'soft-hover': 'var(--shadow-hover)',
      },
    },
  },
  plugins: [],
};
