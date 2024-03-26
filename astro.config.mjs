import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://suyena.com',
  integrations: [sitemap(), db()]
});