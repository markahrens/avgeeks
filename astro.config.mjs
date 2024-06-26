import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://avgeek.mytungsten.net',
  integrations: [react(), sitemap()],
  output: "server",
  adapter: cloudflare()
});