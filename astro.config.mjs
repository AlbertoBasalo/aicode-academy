import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  site: 'https://aicode.academy',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});