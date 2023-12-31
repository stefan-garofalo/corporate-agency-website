/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      dark: {
        100: '#DADADA',
        200: '#848385',
        300: '#312F33',
        400: '#1C1A1E',
      },
      light: {
        100: '#373333',
        200: '#C2BCB9',
        300: '#F9F7F5',
        400: '#FFFFFF',
      },
    },
    extend: {
      spacing: {
        container: '2.5rem',
      },
      aspectRatio: {
        work: '1.43',
      },
      backgroundImage: {
        'gradient-to-208':
          'linear-gradient(190deg, var(--tw-gradient-stops));',
        'gradient-to-132':
          'linear-gradient(132deg, var(--tw-gradient-stops));',
      },
    },
  },

  plugins: [require('tailwindcss-typography-shorthand')],
}
