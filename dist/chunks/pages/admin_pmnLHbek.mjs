import { e as createAstro, f as createComponent, r as renderTemplate, k as renderHead } from '../astro_6sNcPkev.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://txchyon-blog.pages.dev");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  return renderTemplate`<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><link href="/admin/config.yml" type="text/yaml" rel="cms-config-url"><title>Content Manager</title>${renderHead()}</head> <body> <!-- Include the script that builds the page and powers Decap CMS -->  </body> </html>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro-decap-cms-oauth/src/admin.astro", void 0);

const $$file = "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro-decap-cms-oauth/src/admin.astro";
const $$url = undefined;

export { $$Admin as default, $$file as file, $$url as url };
