/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          600: '#333333',
          700: '#2A2A2A',
          800: '#1E1E1E',
          900: '#121212',
        },
        accent: '#FFD700',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: false,
  },
}