import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), tailwind()],
  image: {
    remotePatterns: [{ protocol: "https" }]
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/dev-toolbar']
    }
  }
});