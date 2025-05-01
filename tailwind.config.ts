/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}', // Already includes components directory
    ],
    theme: {
      extend: {
        fontFamily: {
          'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
          'geist-mono': ['var(--font-geist-mono)', 'monospace'],
          oswald: ['var(--font-oswald)', 'sans-serif'],
          bonheur: ['var(--font-bonheur)', 'cursive'],
          anybody: ['var(--font-anybody)', 'sans-serif'],
        },
        fontVariationSettings: {
          'wdth-100': '"wdth" 100', // For Anybody's variable font settings
        },
      },
    },
    plugins: [],
  };