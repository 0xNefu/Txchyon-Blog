import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as addAttribute, u as unescapeHTML, h as renderComponent, F as Fragment, k as renderHead, i as renderSlot } from '../astro_6sNcPkev.mjs';
import 'kleur/colors';
import 'clsx';
import { optimize } from 'svgo';
import { c as create_ssr_component, e as escape, S as SITE, $ as $$BaseHead, a as $$Prose, b as $$MainLayout } from './about_6_qXNLeE.mjs';
/* empty css                           */

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$5 = createAstro("https://txchyon-blog.pages.dev");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$4 = createAstro("https://txchyon-blog.pages.dev");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$3 = createAstro("https://txchyon-blog.pages.dev");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$2 = createAstro("https://txchyon-blog.pages.dev");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/PostStats.svelte generated by Svelte v4.2.8 */

const css = {
	code: ".post-stats__views.svelte-rbbars{margin-left:0.25rem;margin-right:0.25rem;padding-left:0.25rem;padding-right:0.25rem\n}",
	map: null
};

const PostStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { slug = "" } = $$props;
	let views = 0;

	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	$$result.css.add(css);
	return `<span class="post-stats__views svelte-rbbars">${escape(views)} views</span>`;
});

const $$Astro$1 = createAstro("https://txchyon-blog.pages.dev");
const $$EditLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl, label = "Edit this page" } = Astro2.props;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")}${addAttribute(label, "title")} class=" font-thin text-theme-primary dark:text-theme-dark-primary text-sm">${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 inline-block", "pack": "mdi", "name": "pencil" })}${label}</a>`}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/EditLink.astro", void 0);

const $$Astro = createAstro("https://txchyon-blog.pages.dev");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { content, meta } = Astro2.props;
  const AUTHOR_NAME = content.author ? content.author : "Author";
  const AUTHOR_TWITTER = content.authorTwitter ? content.authorTwitter : SITE?.authorTwitter ;
  const AUTHOR_AVATAR = content.authorImage ? content.authorImage : "";
  return renderTemplate`<html lang="en" data-astro-cid-jj6gr7j4> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...content, "title": content.title ? `${SITE.title} | ${content.title}` : SITE.title, "data-astro-cid-jj6gr7j4": true })}${renderHead()}</head> ${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-jj6gr7j4": true }, { "default": ($$result2) => renderTemplate` <div class="post__header" data-astro-cid-jj6gr7j4> <div class="post__tags" data-astro-cid-jj6gr7j4> ${content.tags.length > 0 && content.tags.map((tag) => renderTemplate`<a class="post__tag"${addAttribute(`/tags/${tag}`, "href")}${addAttribute(tag, "title")} data-astro-cid-jj6gr7j4>${tag}</a>`)} </div> <h1 class="post__title" data-astro-cid-jj6gr7j4>${content.title}</h1> <h5${addAttribute(`post__desc ${AUTHOR_AVATAR ? "flex flex-row gap-2" : ""}`, "class")} data-astro-cid-jj6gr7j4> ${AUTHOR_AVATAR ? renderTemplate`<img class="avatar"${addAttribute(AUTHOR_AVATAR, "src")}${addAttribute(`${AUTHOR_NAME}'s avatar`, "alt")} data-astro-cid-jj6gr7j4>` : ""} <div${addAttribute(AUTHOR_AVATAR ? "flex flex-col border-l-2 pl-2" : "", "class")} data-astro-cid-jj6gr7j4> ${AUTHOR_TWITTER ? renderTemplate`<a class="post__author"${addAttribute(`https://twitter.com/${AUTHOR_TWITTER}`, "href")}${addAttribute(`${AUTHOR_NAME}'s twitter`, "title")} target="_blank" rel="external" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</a>` : renderTemplate`<span class="post__author" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</span>`} ${!AUTHOR_AVATAR ? " | " : ""} <span class="post__date" data-astro-cid-jj6gr7j4> <!-- post creation/updation data --> ${new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date(content.date))} </span> <span class="post__stats" data-astro-cid-jj6gr7j4> ${` | `} ${renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5 inline-block", "pack": "mdi", "name": "eye", "data-astro-cid-jj6gr7j4": true })}${renderComponent($$result2, "PostStats", PostStats, { "slug": meta?.slug, "client:load": true, "client:component-hydration": "load", "client:component-path": "$/components/PostStats.svelte", "client:component-export": "default", "data-astro-cid-jj6gr7j4": true })}`} <!-- | <Icon class="w-5 h-5 inline-block" pack="mdi" name="clock" /> 2 mins --> </span> </div> </h5> </div> ${content.image ? renderTemplate`<img class="img__outer"${addAttribute(content.image, "src")}${addAttribute(content.title, "alt")} data-astro-cid-jj6gr7j4><br data-astro-cid-jj6gr7j4>` : ""}${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-jj6gr7j4": true }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} <div class="post__footer" data-astro-cid-jj6gr7j4> ${renderTemplate`<br data-astro-cid-jj6gr7j4><div class="author-card" data-astro-cid-jj6gr7j4> ${AUTHOR_AVATAR ? renderTemplate`<img class="author-card__img avatar avatar--lg"${addAttribute(AUTHOR_AVATAR, "src")}${addAttribute(`${AUTHOR_NAME}'s avatar`, "alt")} data-astro-cid-jj6gr7j4>` : ""} <div class="author-card__meta" data-astro-cid-jj6gr7j4> ${AUTHOR_TWITTER ? renderTemplate`<a class="author-card__author"${addAttribute(`https://twitter.com/${AUTHOR_TWITTER}`, "href")}${addAttribute(`${AUTHOR_NAME}'s twitter`, "title")} target="_blank" rel="external" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</a>` : renderTemplate`<span class="author-card__author" data-astro-cid-jj6gr7j4>${AUTHOR_NAME}</span>`} <p class="author-card__bio" data-astro-cid-jj6gr7j4>${SITE.authorBio}</p> <br data-astro-cid-jj6gr7j4> ${renderTemplate`<a class="author-card__follow-btn button" target="_blank"${addAttribute(`https://twitter.com/intent/follow?screen_name=${AUTHOR_TWITTER}`, "href")} data-astro-cid-jj6gr7j4>${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5 inline-block", "pack": "mdi", "name": "twitter", "data-astro-cid-jj6gr7j4": true })} Follow on Twitter</a>`} </div> </div><br data-astro-cid-jj6gr7j4>`} ${meta?.collection && meta?.id && renderTemplate`${renderComponent($$result2, "EditUrl", $$EditLink, { "label": " Suggest changes on GitHub", "editUrl": `${SITE.githubUrl}/tree/main/src/content/${meta?.collection}/${meta?.id}`, "data-astro-cid-jj6gr7j4": true })}`} </div> ` })}  </html>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/layouts/post.astro", void 0);

const html = "<p>GThis is the body</p>";

				const frontmatter = {"layout":"$/layouts/post.astro","title":"Item1","description":"Test","author":"Justin","authorTwitter":"@justin","date":"2023-12-11T00:48:30.405Z"};
				const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/blog/item1.md";
				const url = "/blog/item1";
				function rawContent() {
					return "GThis is the body";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const item1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Post as $, item1 as i };
