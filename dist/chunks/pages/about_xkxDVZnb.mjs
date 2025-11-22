import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderSlot, k as renderTransition, l as renderHead, _ as __astro_tag_component__, F as Fragment, n as createVNode } from '../astro_X-xMHih5.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_3SwDylgH.mjs';
import 'clsx';
import 'kleur/colors';
/* empty css                          */
import path from 'path';
/* empty css                          */
/* empty css                           */

const $$Astro$c = createAstro("https://astro-ink.vercel.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro/components/Image.astro", void 0);

const $$Astro$b = createAstro("https://astro-ink.vercel.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///C:/Users/NefuTrades/txchyon-capital-blog/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const NAV_ITEMS = {
  home: {
    path: "/",
    title: "home"
  },
  blog: {
    path: "/blog",
    title: "blog"
  },
  tags: {
    path: "/tags",
    title: "tags"
  },
  media: {
    path: "/media",
    title: "media"
  },
  about: {
    path: "/about",
    title: "about"
  }
};
const SITE = {
  // Your site's detail?
  name: "Txchyon",
  title: "Txchyon",
  description: "Strategic on-chain investment fund | Tachyon speed accumulation",
  url: "https://txchyon.com",
  githubUrl: "https://github.com/0xNefu/txchyon-astro-ink",
  listDrafts: false,
  // set false for production
  image: "https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
  // YT video channel Id (used in media.astro)
  ytChannelId: "txchyon",
  // Optional, user/author settings (example)
  // Author: name
  author: "",
  // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: "@NefuTrades",
  // Example: FredKSchott
  // Author: Image external source
  authorImage: "",
  // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
  // Author: Bio
  authorBio: "C"
};
const PAGE_SIZE = 8;

const $$Astro$a = createAstro("https://astro-ink.vercel.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro("https://astro-ink.vercel.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = SITE.title, description, permalink, image } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<!-- Use Google Fonts, if you don't wanna prefer a self-hosted version --><!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet"> --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>`, '</title><meta name="title"', ">", "", '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="msapplication-TileColor" content="#da532c"><meta name="msapplication-config" content="/browserconfig.xml"><meta name="theme-color" content="#ffffff"><!-- Open Graph Tags (Facebook) --><meta property="og:type" content="website"><meta property="og:title"', ">", "", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', ">", "", "", '<script>\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n<\/script>'])), title, addAttribute(title, "content"), description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(title, "content"), permalink && renderTemplate`<meta property="og:url"${addAttribute(permalink, "content")}>`, description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`, image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`, addAttribute(title, "content"), permalink && renderTemplate`<meta property="twitter:url"${addAttribute(permalink, "content")}>`, description && renderTemplate`<meta property="twitter:description"${addAttribute(description, "content")}>`, image && renderTemplate`<meta property="twitter:image"${addAttribute(image, "content")}>`);
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/BaseHead.astro", void 0);

const $$Astro$8 = createAstro("https://astro-ink.vercel.app");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`${maybeRenderHead()}<body class="font-sans antialiased min-h-screen bg-gray-100 dark:bg-gray-800"> <svg class="absolute w-full fill-theme-primary dark:fill-theme-dark-primary opacity-10 -z-10" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 81L26.7 86.5C53.3 92 106.7 103 160 99.3C213.3 95.7 266.7 77.3 320 66.3C373.3 55.3 426.7 51.7 480 49.7C533.3 47.7 586.7 47.3 640 45.2C693.3 43 746.7 39 800 51C853.3 63 906.7 91 933.3 105L960 119L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z" stroke-linecap="round" stroke-linejoin="miter"></path></svg> <div class="transition-colors"> <main class="mx-auto max-w-4xl px-4 md:px-0"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/BaseLayout.astro", void 0);

const $$Astro$7 = createAstro("https://astro-ink.vercel.app");
const $$SvgIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SvgIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/SvgIcon.astro", void 0);

/** @returns {void} */
function noop() {}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key])
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

/** @returns {string} */
function add_styles(style_object) {
	const styles = style_object_to_string(style_object);
	return styles ? ` style="${styles}"` : '';
}

const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

const theme = writable("dark");

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/ModeSwitcher.svelte generated by Svelte v4.2.8 */
const THEME_DARK = "dark";

const ModeSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let currTheme = THEME_DARK;

	return `<button>${slots.default ? slots.default({ theme: currTheme }) : ``}</button>`;
});

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/SvgIcon.svelte generated by Svelte v4.2.8 */

const SvgIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${slots.default ? slots.default({}) : ``}</svg>`;
});

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/ModeSwitcherBtn.svelte generated by Svelte v4.2.8 */

const ModeSwitcherBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(ModeSwitcher, "ModeSwitcher").$$render($$result, {}, {}, {
		default: ({ theme }) => {
			return `${validate_component(SvgIcon, "SvgIcon").$$render($$result, {}, {}, {
				default: () => {
					return `${theme === 'dark'
					? `<circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`
					: `<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>`}`;
				}
			})}`;
		}
	})}`;
});

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/SearchIcon.svelte generated by Svelte v4.2.8 */

const SearchIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { found = false } = $$props;
	if ($$props.found === void 0 && $$bindings.found && found !== void 0) $$bindings.found(found);

	return `${validate_component(SvgIcon, "SvgIcon").$$render($$result, {}, {}, {
		default: () => {
			return `${found
			? `<path d="M7.66542 10.2366L9.19751 8.951L10.4831 10.4831L13.5473 7.91194L14.8328 9.44402L10.2366 13.3007L7.66542 10.2366Z" fill="currentColor"></path>`
			: ``} <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 4.89344C19.0923 7.77862 19.3131 12.3193 16.8693 15.4578C16.8846 15.4713 16.8996 15.4854 16.9143 15.5L21.1569 19.7427C21.5474 20.1332 21.5474 20.7664 21.1569 21.1569C20.7664 21.5474 20.1332 21.5474 19.7427 21.1569L15.5 16.9143C15.4854 16.8996 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77862 19.0923 4.89344 16.2071C1.76924 13.083 1.76924 8.01763 4.89344 4.89344C8.01763 1.76924 13.083 1.76924 16.2071 4.89344ZM14.7929 14.7929C17.1361 12.4498 17.1361 8.6508 14.7929 6.30765C12.4498 3.96451 8.6508 3.96451 6.30765 6.30765C3.96451 8.6508 3.96451 12.4498 6.30765 14.7929C8.6508 17.1361 12.4498 17.1361 14.7929 14.7929Z" fill="currentColor"></path>`;
		}
	})}`;
});

const isSearchVisible = writable(false);

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/SearchBtn.svelte generated by Svelte v4.2.8 */

const SearchBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	return `<button>${validate_component(SearchIcon, "SearchIcon").$$render($$result, {}, {}, {})}</button>`;
});

const $$Astro$6 = createAstro("https://astro-ink.vercel.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="header__logo" data-astro-cid-3ef6ksr2> <a href="/" class="avatar" data-astro-cid-3ef6ksr2> <!-- THIS IS YOUR LOGO NOW --> <img class="header__logo-img" src="/txchyon-logo.png" alt="Txchyon" data-astro-cid-3ef6ksr2> </a> </div> <div class="header__meta flex-1" data-astro-cid-3ef6ksr2> <h3 class="header__title dark:text-theme-dark-secondary" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>${SITE.name}</a> </h3> <div class="header__meta-more flex" data-astro-cid-3ef6ksr2> <p class="header__desc" data-astro-cid-3ef6ksr2> ${SITE.description} </p> <nav class="header__nav flex" data-astro-cid-3ef6ksr2> <ul class="header__ref-list" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SearchBtn", SearchBtn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/NefuTrades/txchyon-capital-blog/src/components/SearchBtn.svelte", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </li> <li data-astro-cid-3ef6ksr2> <a${addAttribute(SITE.githubUrl, "href")}${addAttribute(`${SITE.name}'s Github URL'`, "title")} data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SvgIcon", $$SvgIcon, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-astro-cid-3ef6ksr2></path> ` })} </a> </li> <li data-astro-cid-3ef6ksr2> <a href="/rss.xml" title="RSS" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SvgIcon", $$SvgIcon, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <path d="M4 11a9 9 0 0 1 9 9" data-astro-cid-3ef6ksr2></path> <path d="M4 4a16 16 0 0 1 16 16" data-astro-cid-3ef6ksr2></path> <circle cx="5" cy="19" r="1" data-astro-cid-3ef6ksr2></circle> ` })} </a> </li> <li data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ModeSwitcherBtn", ModeSwitcherBtn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/NefuTrades/txchyon-capital-blog/src/components/ModeSwitcherBtn.svelte", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </li> </ul> </nav> </div> </div> </header> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Header.astro", void 0);

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/ModeSensitive.svelte generated by Svelte v4.2.8 */

const ModeSensitive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $theme, $$unsubscribe_theme;
	$$unsubscribe_theme = subscribe(theme, value => $theme = value);
	$$unsubscribe_theme();

	return `${$theme === 'dark'
	? `${slots.dark ? slots.dark({}) : ``}`
	: `${slots.light ? slots.light({}) : ``}`}`;
});

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/ModeLabel.svelte generated by Svelte v4.2.8 */

const ModeLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(ModeSensitive, "ModeSensitive").$$render($$result, {}, {}, {
		light: () => {
			return `<span slot="light" data-svelte-h="svelte-1fh1ua8">(light)</span>`;
		},
		dark: () => {
			return `<span slot="dark" data-svelte-h="svelte-14ov3lc">(dark)</span>`;
		}
	})}`;
});

const $$Astro$5 = createAstro("https://astro-ink.vercel.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <nav class="nav" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte>2021  &copy; Copyright notice | <a${addAttribute(SITE.githubUrl, "href")}${addAttribute(`${SITE.name}'s Github URL'`, "title")} data-astro-cid-sz7xmlte>${SITE.name}</a> ${renderComponent($$result, "ModeLabel", ModeLabel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/NefuTrades/txchyon-capital-blog/src/components/ModeLabel.svelte", "client:component-export": "default", "data-astro-cid-sz7xmlte": true })} theme on <a href="https://astro.build/" data-astro-cid-sz7xmlte>Astro</a></div> </nav> </footer> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Footer.astro", void 0);

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const toTitleCase = (str) => str.replace(/\w\S*/g, function(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
const getMonthName = (date) => MONTHS[new Date(date).getMonth()];
const getSlugFromPathname = (pathname) => path.basename(pathname, path.extname(pathname));

const $$Astro$4 = createAstro("https://astro-ink.vercel.app");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="nav py-3" data-astro-cid-dmqpwcec> <ul class="nav-list dark:text-theme-dark-secondary" data-astro-cid-dmqpwcec${addAttribute(renderTransition($$result, "4ybupojm", "fade", ""), "data-astro-transition-scope")}> ${Object.keys(NAV_ITEMS).map((navItemKey) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute([
    `pb-1 border-b-2 hover:border-gray-400 hover:dark:border-gray-700 `,
    Astro2.url.pathname !== NAV_ITEMS[navItemKey].path ? "border-gray-100 dark:border-gray-800" : "",
    Astro2.url.pathname === NAV_ITEMS[navItemKey].path ? "border-theme-primary" : ""
  ], "class:list")}${addAttribute(NAV_ITEMS[navItemKey].path, "href")}${addAttribute(NAV_ITEMS[navItemKey].title, "title")} data-astro-cid-dmqpwcec>${toTitleCase(NAV_ITEMS[navItemKey].title)}</a> </li>`)} </ul> </nav> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Nav.astro", "self");

const $$Astro$3 = createAstro("https://astro-ink.vercel.app");
const $$Portal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Portal;
  return renderTemplate`${maybeRenderHead()}<div class="portal-root"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Portal.astro", void 0);

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/PostSearchPreview.svelte generated by Svelte v4.2.8 */

const css$2 = {
	code: ".post-preview.svelte-ofkg9t{display:flex;gap:1.5rem;text-align:left\n}.post-preview__title.svelte-ofkg9t{margin-bottom:0.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;line-height:1.25;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}.post-preview__desc.svelte-ofkg9t{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:1rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(216 180 254 / var(--tw-text-opacity))\n}.tag-list.svelte-ofkg9t{display:flex;list-style-type:none;flex-wrap:wrap;gap:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem\n}.tag.svelte-ofkg9t{display:inline-block;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(216 180 254 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(126 34 206 / var(--tw-text-opacity))\n}",
	map: null
};

const PostSearchPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	let { isLast = false } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	if ($$props.isLast === void 0 && $$bindings.isLast && isLast !== void 0) $$bindings.isLast(isLast);
	$$result.css.add(css$2);

	return `<div class="post-preview hover:bg-theme-primary svelte-ofkg9t"><div class="flex-1"><h4 class="post-preview__title svelte-ofkg9t"><a${add_attribute("href", `/${post.category}/${post.slug}`, 0)}${add_attribute("title", post.title, 0)}>${escape(post.title)} →</a></h4> <p class="post-preview__desc svelte-ofkg9t">${escape(post.description)}</p> <ul class="tag-list svelte-ofkg9t">${each(post.tags, tag => {
		return `<a class="tag svelte-ofkg9t"${add_attribute("href", `/tags/${tag}`, 0)}${add_attribute("title", tag, 0)}>${escape(tag)}</a>`;
	})}</ul></div></div> ${!isLast
	? `<hr class="my-4 text-theme-dark-secondary">`
	: ``}`;
});

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/Search.svelte generated by Svelte v4.2.8 */

const css$1 = {
	code: ".search.svelte-ft3h3t.svelte-ft3h3t{position:relative;width:100%;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(126 34 206 / var(--tw-bg-opacity));padding:2rem;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}input.svelte-ft3h3t.svelte-ft3h3t{width:100%;border-radius:0.375rem;border-width:0px;--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity));padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:2.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity))\n}input.svelte-ft3h3t.svelte-ft3h3t::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(168 85 247 / var(--tw-placeholder-opacity))\n}input.svelte-ft3h3t.svelte-ft3h3t::placeholder{--tw-placeholder-opacity:1;color:rgb(168 85 247 / var(--tw-placeholder-opacity))\n}input.svelte-ft3h3t.svelte-ft3h3t{--tw-shadow:inset 0 2px 4px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.search__ctrl.svelte-ft3h3t.svelte-ft3h3t{position:relative;padding-bottom:1rem\n}.search__ctrl.svelte-ft3h3t label.svelte-ft3h3t{position:absolute;top:0.5rem;left:0.5rem;--tw-text-opacity:1;color:rgb(126 34 206 / var(--tw-text-opacity))\n}.search__results.svelte-ft3h3t.svelte-ft3h3t{height:16rem;width:24rem;overflow-y:auto;padding-top:1rem;padding-bottom:1rem\n}.search__results--none.svelte-ft3h3t.svelte-ft3h3t{text-align:center;--tw-text-opacity:1;color:rgb(216 180 254 / var(--tw-text-opacity))\n}.note.svelte-ft3h3t.svelte-ft3h3t{width:100%;text-align:center;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
	map: null
};

const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let searchInput;
	let searchQuery = "";
	let searchResults = [];

	$$result.css.add(css$1);

	return `<div class="search svelte-ft3h3t"><div class="search__ctrl svelte-ft3h3t"><label for="search" class="svelte-ft3h3t">${validate_component(SearchIcon, "SearchIcon").$$render($$result, { found: searchResults.length > 0 }, {}, {})}</label> <input type="text" name="search" placeholder="What are you looking for?" class="svelte-ft3h3t"${add_attribute("this", searchInput, 0)}${add_attribute("value", searchQuery, 0)}></div> <div class="search__results svelte-ft3h3t">${searchResults.length
	? `${each(searchResults, (post, i) => {
			return `${validate_component(PostSearchPreview, "PostSearchPreview").$$render(
				$$result,
				{
					post,
					isLast: i === searchResults.length - 1
				},
				{},
				{}
			)}`;
		})}`
	: `<div class="search__results--none svelte-ft3h3t">${searchQuery.length
		? `No matching items found!`
		: `Search something and let me find it for you! :-)`}</div>`}</div> <div class="note svelte-ft3h3t" data-svelte-h="svelte-fzud3b"><small>click anywhere outside to close</small></div> </div>`;
});

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/SearchModal.svelte generated by Svelte v4.2.8 */

const css = {
	code: ".modal.svelte-gud11r{pointer-events:none;position:fixed;top:0px;left:0px;display:grid;height:100%;width:100%;align-content:center;justify-content:center\n}.modal__backdrop.svelte-gud11r{position:fixed;top:0px;left:0px;z-index:0;height:100vh;width:100%;background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#c026d3 var(--tw-gradient-from-position);--tw-gradient-to:rgb(192 38 211 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#701a75 var(--tw-gradient-to-position);opacity:0.5\n}.modal__cnt.svelte-gud11r{pointer-events:auto;z-index:10;width:100%\n}",
	map: null
};

const SearchModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $isSearchVisible, $$unsubscribe_isSearchVisible;
	$$unsubscribe_isSearchVisible = subscribe(isSearchVisible, value => $isSearchVisible = value);

	$$result.css.add(css);
	$$unsubscribe_isSearchVisible();

	return `${$isSearchVisible
	? `<div class="modal__backdrop svelte-gud11r" role="button" tabindex="0"></div> <div class="modal svelte-gud11r" role="dialog"><div class="modal__cnt svelte-gud11r">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></div>`
	: ``}`;
});

const $$Astro$2 = createAstro("https://astro-ink.vercel.app");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-fhdt7an5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<br class="my-4" data-astro-cid-fhdt7an5> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-fhdt7an5": true })} ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-fhdt7an5": true })} <div class="content" data-astro-cid-fhdt7an5> ${renderSlot($$result2, $$slots["default"])} </div> <br class="my-4" data-astro-cid-fhdt7an5> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-fhdt7an5": true })} ${renderComponent($$result2, "Portal", $$Portal, { "data-astro-cid-fhdt7an5": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SearchModal", SearchModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/NefuTrades/txchyon-capital-blog/src/components/SearchModal.svelte", "client:component-export": "default", "data-astro-cid-fhdt7an5": true })} ` })} ` })} `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/MainLayout.astro", void 0);

const $$Astro$1 = createAstro("https://astro-ink.vercel.app");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  const { content, showPageHeader = true } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-5z7xtygo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": content.title ? `${SITE.title} | ${content.title}` : SITE.title, "description": content.description, "image": SITE.image, "data-astro-cid-5z7xtygo": true })}${renderHead()}</head> ${renderComponent($$result, "MainLayout", $$MainLayout, { "data-astro-cid-5z7xtygo": true }, { "default": ($$result2) => renderTemplate`${showPageHeader && renderTemplate`<div class="page__header" data-astro-cid-5z7xtygo> <h1 class="page__title" data-astro-cid-5z7xtygo>${content.title}</h1> <h5 class="page__desc" data-astro-cid-5z7xtygo>${content.description}</h5> </div>`}${renderSlot($$result2, $$slots["default"])} ` })} </html>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/layouts/default.astro", void 0);

const $$Astro = createAstro("https://astro-ink.vercel.app");
const $$Prose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prose;
  return renderTemplate`${maybeRenderHead()}<article class="prose dark:prose-invert" data-astro-cid-apjhz64k> ${renderSlot($$result, $$slots["default"])} </article> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Prose.astro", void 0);

const frontmatter = {
  "title": "About",
  "description": "There is a simple secret to building a faster website \u2014 just ship less."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "author",
    "text": "Author"
  }, {
    "depth": 3,
    "slug": "credits",
    "text": "Credits"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode($$Default, {
    content: {
      title: frontmatter.title,
      description: frontmatter.description
    },
    children: createVNode($$Prose, {
      children: [createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Astro-Ink"
        }), " is a crisp, minimal, personal blog theme for Astro, that shows the capability of statically built sites - offering all the goodness and DX of the modern JS ecosystem without actually shipping any JS by default."]
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Astro-ink"
        }), " strives to remain minimal & performant while still offering you all the bells and whistles you expect in a personal blog system. Please check the ", createVNode(_components.a, {
          href: "https://github.com/one-aalam/astro-ink/blob/main/README.md",
          children: "README"
        }), " to know about all the features."]
      }), createVNode(_components.h2, {
        id: "author",
        children: "Author"
      }), createVNode(_components.p, {
        children: ["Aftab Alam // ", createVNode(_components.a, {
          href: "https://twitter.com/aftabbuddy",
          children: "@aftabbuddy"
        }), "  // ", createVNode(_components.a, {
          href: "https://github.com/one-aalam",
          children: "one-aalam"
        })]
      }), createVNode("div", {
        class: "author",
        children: createVNode("img", {
          class: "rounded-full",
          width: "160",
          src: "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg",
          title: "Aalam"
        })
      }), createVNode(_components.h3, {
        id: "credits",
        children: "Credits"
      }), createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Illustrations:"
        }), " ", createVNode(_components.a, {
          href: "https://www.openpeeps.com/",
          children: "openpeeps"
        })]
      })]
    })
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/about";
const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/about.mdx";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, PAGE_SIZE as P, SITE as S, $$Prose as a, $$MainLayout as b, create_ssr_component as c, $$Default as d, escape as e, getSlugFromPathname as f, getMonthName as g, add_styles as h, imageConfig as i, add_attribute as j, $$Image as k, about as l, merge_ssr_styles as m };
