import rss from '@astrojs/rss';
import { A as AstroError, o as UnknownContentCollectionError, f as createComponent, p as renderUniqueStylesheet, q as renderScriptElement, t as createHeadAndContent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_X-xMHih5.mjs';
import { p as prependForwardSlash } from '../astro/assets-service_3SwDylgH.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE } from './about_xkxDVZnb.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://astro-ink.vercel.app", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/aster-28-percent-yield.mdx": () => import('../aster-28-percent-yield_q2W-yvil.mjs'),"/src/content/blog/aster-sub-1-dip.mdx": () => import('../aster-sub-1-dip_jk5XjWE6.mjs'),"/src/content/blog/aster-vs-drift-vs-hyperliquid.mdx": () => import('../aster-vs-drift-vs-hyperliquid_4Z9WZ0sE.mjs'),"/src/content/blog/iopn-solana-ai-agent-infra.mdx": () => import('../iopn-solana-ai-agent-infra_dwvzdXH8.mjs'),"/src/content/blog/kloutgg-solana-social-infra.mdx": () => import('../kloutgg-solana-social-infra_k_f1ui0c.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"aster-28-percent-yield":"/src/content/blog/aster-28-percent-yield.mdx","aster-sub-1-dip":"/src/content/blog/aster-sub-1-dip.mdx","aster-vs-drift-vs-hyperliquid":"/src/content/blog/aster-vs-drift-vs-hyperliquid.mdx","kloutgg-solana-social-infra":"/src/content/blog/kloutgg-solana-social-infra.mdx","iopn-solana-ai-agent-infra":"/src/content/blog/iopn-solana-ai-agent-infra.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/aster-28-percent-yield.mdx": () => import('../aster-28-percent-yield_Mky9ymYj.mjs'),"/src/content/blog/aster-sub-1-dip.mdx": () => import('../aster-sub-1-dip_TQkq_1cf.mjs'),"/src/content/blog/aster-vs-drift-vs-hyperliquid.mdx": () => import('../aster-vs-drift-vs-hyperliquid_D6zLp3TG.mjs'),"/src/content/blog/iopn-solana-ai-agent-infra.mdx": () => import('../iopn-solana-ai-agent-infra_g8RtyJRL.mjs'),"/src/content/blog/kloutgg-solana-social-infra.mdx": () => import('../kloutgg-solana-social-infra_nhuv9ksC.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const allPosts = await getCollection("blog");
const sortedPosts = Object.values(allPosts).sort(
	(a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
);

const get = () =>
	rss({
		// `<title>` field in output xml
		title: `${SITE.name} | Blog`,
		// `<description>` field in output xml
		description: SITE.description,
		// base URL for RSS <item> links
		// SITE will use "site" from your project's astro.config.
		site: "https://astro-ink.vercel.app",
		// list of `<item>`s in output xml
		// simple example: generate items for every md file in /src/pages
		// see "Generating items" section for required frontmatter and advanced use cases
		items: sortedPosts.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			link: `blog/${item.slug}`,
			pubDate: new Date(item.data.date),
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});

const rss_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

export { getEntryBySlug as a, getCollection as g, rss_xml as r };
