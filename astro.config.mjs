import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import markdoc from "@astrojs/markdoc";
import decapCmsOauth from "astro-decap-cms-oauth";
import remarkCodeTitles from 'remark-code-titles';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  output: 'static',                              // ← static for Cloudflare Pages
  site: 'https://txchyon-blog.pages.dev',        // ← your real URL
  base: '/',                                     // ← critical

  integrations: [
    mdx(),
    markdoc(),
    svelte(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    decapCmsOauth()
  ],

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'css-variables' },
    remarkPlugins: [remarkCodeTitles]
  },

  vite: {
    resolve: {
      alias: {
        // ← This line fixes the "$/" imports instantly
        '$': path.resolve(__dirname, './src')
      }
    }
  }
});