import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // Cambia esto por el dominio final (Netlify te asigna uno gratis, o usa tu propio dominio)
  site: 'https://tu-sitio.netlify.app',

  integrations: [tailwind()],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
