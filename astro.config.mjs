// @ts-check
import { defineConfig } from 'astro/config';

import daisyui from "daisyui";
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      daisyui
    ]
  },

  integrations: [alpinejs(), image()]
});