// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://mrtechnix.github.io',
  base: '/XRPL1',
  integrations: [alpinejs()],
});