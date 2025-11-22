import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, i as renderSlot, j as renderTransition } from './astro_6sNcPkev.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, a as getEntryBySlug } from './pages/rss_HJOMMEWF.mjs';
import { g as getMonthName, d as $$Default, f as getSlugFromPathname, P as PAGE_SIZE, S as SITE, c as create_ssr_component, h as add_styles, m as merge_ssr_styles, i as add_attribute } from './pages/about__18L1FwK.mjs';
/* empty css                         */
/* empty css                          */
/* empty css                         */
import { $ as $$Post } from './pages/item1_SQ9mJdLq.mjs';
/* empty css                         */
/* empty css                         */
/* empty css                          */
/* empty css                          */

const $$Astro$g = createAstro("https://txchyon-blog.pages.dev");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post: { data: post, slug }, asCard = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`post-preview ${asCard && "post-preview--card"}`, "class")} data-astro-cid-jzq3evcu> <div class="post-preview__date-box" data-astro-cid-jzq3evcu> <div class="post-preview__date" data-astro-cid-jzq3evcu> <span class="post-preview__date__day" data-astro-cid-jzq3evcu>${new Date(post.date).getDate()}</span> <span class="post-preview__date__month-n-year" data-astro-cid-jzq3evcu>${`${getMonthName(post.date)} ${new Date(post.date).getFullYear()}`}</span> </div> </div> <div class="flex-1" data-astro-cid-jzq3evcu> <h4 class="post-preview__title dark:text-theme-dark-primary" data-astro-cid-jzq3evcu> <a${addAttribute(`/blog/${slug}`, "href")}${addAttribute(post.title, "title")} data-astro-cid-jzq3evcu>${post.title}</a> </h4> <p class="post-preview__desc" data-astro-cid-jzq3evcu> ${post.description} </p> </div> </div> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/PostPreview.astro", void 0);

const $$Astro$f = createAstro("https://txchyon-blog.pages.dev");
const $$PostPreviewList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PostPreviewList;
  const { posts, heading, mode = "col" } = Astro2.props;
  const sortedPosts = posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return renderTemplate`${heading ? renderTemplate`${maybeRenderHead()}<h5${addAttribute(`post-preview__heading post-preview__heading--${mode} ink-h`, "class")} data-astro-cid-n45jycaa>${heading}</h5>` : ""}<section${addAttribute(`post-preview__list post-preview__list--${mode}`, "class")} data-astro-cid-n45jycaa>${sortedPosts.map((post) => renderTemplate`${renderComponent($$result, "PostPreview", $$PostPreview, { "post": post, "asCard": mode === "row" ? true : false, "data-astro-cid-n45jycaa": true })}`)}</section>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/PostPreviewList.astro", void 0);

const $$Astro$e = createAstro("https://txchyon-blog.pages.dev");
const prerender$8 = true;
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$3;
  const title = "Txchyon Capital";
  const description = "Multi-strategy Investment Fund \u2022 Aster perpetuals \u2022 Real yields";
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => post.data.pubDate).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description }, "showPageHeader": false }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"> <h1 class="text-7xl md:text-9xl font-black tracking-tight mb-8 bg-gradient-to-r from-[#00F2FF] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent leading-none">
Txchyon Capital
</h1> <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
Multi-strategy trading firm • Aster perpetuals • Real yields
</p> <!-- LIVE PRICE – temporarily static until we fix the component later --> <div class="rounded-2xl bg-gray-900/90 px-10 py-5 backdrop-blur border border-[#00F2FF]/30 shadow-2xl shadow-[#00F2FF]/20"> <span class="text-5xl md:text-6xl font-mono font-bold text-[#00F2FF] tracking-tight">
$ASTER ≈ <span>$1.29</span> <span class="text-sm ml-2 text-green-400">(offline)</span> </span> </div> <p class="mt-20 text-lg text-gray-500">
Blog coming soon — stacking $ASTER in the meantime.
</p> </section>  ${posts.length > 0 && renderTemplate`<section class="py-24"> <div class="max-w-5xl mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12 text-cyan-400">Latest Research</h2> ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": posts.slice(0, 3) })} <div class="text-center mt-12"> <a href="/blog" class="text-xl text-cyan-400 hover:underline">View all posts →</a> </div> </div> </section>`}` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/index.astro", void 0);

const $$file$8 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/index.astro";
const $$url$8 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$8,
    prerender: prerender$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://txchyon-blog.pages.dev");
const Astro$1 = $$Astro$d;
const prerender$7 = true;
async function getStaticPaths$5({}) {
  let allPosts = [];
  try {
    allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({}), () => "../../../drafts/*.md");
  } catch (error) {
    console.log("No draft posts found while generating the draft pages");
  }
  const allSlugs = /* @__PURE__ */ new Set();
  const allPostsWithSlug = allPosts.map((post) => {
    const slug = getSlugFromPathname(post.file);
    allSlugs.add(slug.toLowerCase());
    return {
      ...post,
      slug
    };
  });
  return Array.from(allSlugs).map((slug) => {
    const filteredPosts = allPostsWithSlug.filter((post) => post.slug === slug);
    return {
      params: { slug },
      props: {
        pages: filteredPosts
      }
    };
  });
}
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { slug } = Astro2.params;
  const { pages } = Astro2.props;
  const [post] = pages;
  return renderTemplate`${maybeRenderHead()}<div class="draft-message" data-astro-cid-gzn2w4sg>
You're viewing a <strong data-astro-cid-gzn2w4sg>preview</strong> of <code data-astro-cid-gzn2w4sg>/blog/${slug}</code> which isn't published yet!
</div> ${renderComponent($$result, "post.Content", post.Content, { "data-astro-cid-gzn2w4sg": true })} `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/drafts/[slug]/index.astro", void 0);

const $$file$7 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/drafts/[slug]/index.astro";
const $$url$7 = "/drafts/[slug]";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$7,
    getStaticPaths: getStaticPaths$5,
    prerender: prerender$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://txchyon-blog.pages.dev");
const $$PostDraftPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PostDraftPreview;
  const { frontmatter: post, file } = Astro2.props.post;
  return renderTemplate`${maybeRenderHead()}<div class="post-draft-preview" data-astro-cid-rlpjy3zc> <div class="sm:w-20 md:w-32" data-astro-cid-rlpjy3zc> <div class="post-draft-preview__date" data-astro-cid-rlpjy3zc> <span class="post-draft-preview__date__day" data-astro-cid-rlpjy3zc>${new Date(post.date).getDate()}</span> <span class="post-draft-preview__date__month-n-year" data-astro-cid-rlpjy3zc>${`${getMonthName(post.date)} ${new Date(post.date).getFullYear()}`}</span> </div> </div> <div class="flex-1" data-astro-cid-rlpjy3zc> <h4 class="post-draft-preview__title dark:text-theme-dark-primary" data-astro-cid-rlpjy3zc> <a${addAttribute(`/drafts/${getSlugFromPathname(file)}`, "href")}${addAttribute(post.title, "title")} data-astro-cid-rlpjy3zc>${post.title}</a> </h4> <p class="post-draft-preview__desc" data-astro-cid-rlpjy3zc> ${post.description} </p> </div> </div> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/PostDraftPreview.astro", void 0);

const $$Astro$b = createAstro("https://txchyon-blog.pages.dev");
const $$PostDraftPreviewList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$PostDraftPreviewList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="post-draft-preview__list" data-astro-cid-mlqldfje> ${posts.map((post) => renderTemplate`${renderComponent($$result, "PostDraftPreview", $$PostDraftPreview, { "post": post, "data-astro-cid-mlqldfje": true })}`)} </section> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/PostDraftPreviewList.astro", void 0);

const $$Astro$a = createAstro("https://txchyon-blog.pages.dev");
const $$Paginator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page__actions" data-astro-cid-plu6zll4> ${page.url.prev && renderTemplate`<a class="action__go-to-x"${addAttribute(page.url.prev, "href")} title="Go to Previous" data-astro-cid-plu6zll4>&larr; Prev</a>`} ${page.url.next && renderTemplate`<a class="action__go-to-x"${addAttribute(page.url.next, "href")} title="Go to Next" data-astro-cid-plu6zll4>Next &rarr;</a>`} </div> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Paginator.astro", void 0);

const $$Astro$9 = createAstro("https://txchyon-blog.pages.dev");
const Astro = $$Astro$9;
const prerender$6 = true;
async function getStaticPaths$4({ paginate, rss }) {
  let allPosts = [];
  try {
    allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../../drafts/*.md");
  } catch (error) {
    console.log("No draft posts found while generating the index page for the draft pages");
  }
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return paginate(sortedPosts, {
    pageSize: PAGE_SIZE
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$$1;
  let title = "Drafts";
  let description = "You're viewing a list of unpublished articles on the site. Accuracy or correctness isn't guranteed...";
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description } }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<p class="text-gray-700 dark:text-gray-100">Looks like you have landed on a unpublished posts page. Please find all the published posts <a href="/blog">here</a>!</p>`}${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/drafts/[...page].astro", void 0);

const $$file$6 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/drafts/[...page].astro";
const $$url$6 = "/drafts/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$6,
    getStaticPaths: getStaticPaths$4,
    prerender: prerender$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://txchyon-blog.pages.dev");
const $$MediaPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MediaPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="post-preview" data-astro-cid-oyndpakh> <div class="sm:w-20 md:w-32" data-astro-cid-oyndpakh> <div class="post-preview__date" data-astro-cid-oyndpakh> <span class="post-preview__date__day" data-astro-cid-oyndpakh>${new Date(post.date).getDate()}</span> <span class="post-preview__date__month-n-year" data-astro-cid-oyndpakh>${`${getMonthName(post.date)} ${new Date(post.date).getFullYear()}`}</span> </div> </div> <div${addAttribute(`flex-1 ${post.thumbnail ? "flex flex-row gap-4" : ""}`, "class")} data-astro-cid-oyndpakh> ${post.thumbnail && renderTemplate`<img class="post-preview__media"${addAttribute(post.thumbnail, "src")} alt="media thumbnail" data-astro-cid-oyndpakh>`} <div class="flex flex-col mb-2" data-astro-cid-oyndpakh> <h4 class="post-preview__title dark:text-theme-dark-primary" data-astro-cid-oyndpakh> <a${addAttribute(post.url, "href")}${addAttribute(post.title, "title")} target="_blank" data-astro-cid-oyndpakh>${post.title}</a> </h4> <div data-astro-cid-oyndpakh> <strong data-astro-cid-oyndpakh>${post.host}</strong> ${post.participants.length > 0 && renderTemplate`<em data-astro-cid-oyndpakh>with</em>`} ${post.participants.length > 0 && `${post.participants.join(", ")}`} </div> </div> <p class="post-preview__desc" data-astro-cid-oyndpakh> ${post.description} </p> </div> </div> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/MediaPreview.astro", void 0);

const $$Astro$7 = createAstro("https://txchyon-blog.pages.dev");
const $$MediaPreviewList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MediaPreviewList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="media-preview__list" data-astro-cid-zw3co6ql> ${posts.map((post) => renderTemplate`${renderComponent($$result, "MediaPreview", $$MediaPreview, { "post": post, "data-astro-cid-zw3co6ql": true })}`)} </section> `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/MediaPreviewList.astro", void 0);

function toFeedToJsonUrl(ytVideoChannelId) {
  return `https://feed2json.org/convert?url=https://www.youtube.com/feeds/videos.xml?channel_id=${ytVideoChannelId}`;
}
function toMediaFormatFromFeed2JsonUrl(posts) {
  return posts?.items?.length ? posts.items.map((post) => ({
    title: post.title,
    description: "",
    url: post.url,
    participants: [],
    date: post.date_published,
    host: post.author.name,
    thumbnail: `https://img.youtube.com/vi/${post.guid.substring(
      post.guid.lastIndexOf(":") + 1,
      post.guid.length
    )}/0.jpg`
  })) : [];
}

const $$Astro$6 = createAstro("https://txchyon-blog.pages.dev");
const prerender$5 = true;
const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Media;
  let title = "Videos & Screencasts";
  let description = "All the great videos on Astro we could find for ya!";
  const response = await fetch(
    toFeedToJsonUrl(SITE.ytChannelId) ,
    {
      headers: {
        "Accept": "application/vnd.github.v3.raw"
      }
    } 
  );
  const allPosts = await response.json();
  const sortedPosts = (toMediaFormatFromFeed2JsonUrl(allPosts) ).sort((a, b) => new Date(b.date) - new Date(a.date));
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MediaPreviewList", $$MediaPreviewList, { "posts": sortedPosts })} ` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/media.astro", void 0);

const $$file$5 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/media.astro";
const $$url$5 = "/media";

const media = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Media,
    file: $$file$5,
    prerender: prerender$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

/* C:/Users/NefuTrades/txchyon-capital-blog/src/components/CodeCopy.svelte generated by Svelte v4.2.8 */

const CodeCopy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const COPIED_TIMEOUT = 2 * 1e3;
	let { stayCopied = COPIED_TIMEOUT } = $$props;
	let selfElm;

	if ($$props.stayCopied === void 0 && $$bindings.stayCopied && stayCopied !== void 0) $$bindings.stayCopied(stayCopied);

	return `<button class="absolute px-2 text-theme-primary dark:text-theme-dark-primary border-1 rounded-lg"${add_styles(merge_ssr_styles("top: 6px; right: 8px;", {
		"display": 'inline-block' 
	}))} ${""}${add_attribute("this", selfElm, 0)}>${`<span data-svelte-h="svelte-166m88g">Copy</span>`}</button>`;
});

const $$Astro$5 = createAstro("https://txchyon-blog.pages.dev");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${renderComponent($$result, "CodeCopy", CodeCopy, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/NefuTrades/txchyon-capital-blog/src/components/CodeCopy.svelte", "client:component-export": "default" })} ${maybeRenderHead()}<code class="astro-ink__code"> ${renderSlot($$result, $$slots["default"])} </code>`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/components/Code.astro", void 0);

const $$Astro$4 = createAstro("https://txchyon-blog.pages.dev");
const prerender$4 = true;
async function getStaticPaths$3() {
  const allPosts = await getCollection("blog");
  return allPosts.map((post) => ({
    params: { slug: post.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntryBySlug("blog", slug);
  if (!entry)
    return Astro2.redirect("/404");
  const { Content } = await entry.render();
  const { data } = entry;
  return renderTemplate`${renderComponent($$result, "PostLayout", $$Post, { "meta": entry, "content": data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, { "components": { code: $$Code } })} ` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/blog/[slug].astro", void 0);

const $$file$4 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/blog/[slug].astro";
const $$url$4 = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file$4,
    getStaticPaths: getStaticPaths$3,
    prerender: prerender$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://txchyon-blog.pages.dev");
const prerender$3 = true;
async function getStaticPaths$2({ paginate }) {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort((a, b) => new Date(b.data.date) - new Date(a.date));
  return paginate(sortedPosts, {
    pageSize: PAGE_SIZE
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$;
  let title = "Blog";
  let description = "All the articles posted so far...";
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": page.data })} ${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/blog/[...page].astro", void 0);

const $$file$3 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/blog/[...page].astro";
const $$url$3 = "/blog/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file$3,
    getStaticPaths: getStaticPaths$2,
    prerender: prerender$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://txchyon-blog.pages.dev");
const prerender$2 = true;
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  let title = "All Tags";
  let description = "All the tags used so far...";
  const allPosts = await getCollection("blog");
  const tags = [...new Set([].concat.apply([], allPosts.map((post) => post.data.tags)))];
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title, description }, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="tag-list" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<li data-astro-cid-os4i7owy><a class="tag"${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`View posts tagged under "${tag}"`, "title")} data-astro-cid-os4i7owy${addAttribute(renderTransition($$result2, "6ykwchq7", "slide", ""), "data-astro-transition-scope")}>${tag}</a></li>`)} </ul> ` })} `;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/tags/index.astro", "self");

const $$file$2 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/tags/index.astro";
const $$url$2 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$2,
    prerender: prerender$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://txchyon-blog.pages.dev");
const prerender$1 = true;
async function getStaticPaths$1({}) {
  const allPosts = await getCollection("blog");
  const allTags = /* @__PURE__ */ new Set();
  allPosts.map((post) => {
    post.data.tags && post.data.tags.map((tag) => allTags.add(tag));
  });
  return Array.from(allTags).map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return {
      params: { tag },
      props: {
        pages: filteredPosts
      }
    };
  });
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const { pages } = Astro2.props;
  const { tag } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title: `Posts by Tag: ${tag}`, description: `all of the articles we have posted and linked so far under the tag: ${tag}` } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": pages })} ` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/tags/[tag]/index.astro", void 0);

const $$file$1 = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/tags/[tag]/index.astro";
const $$url$1 = "/tags/[tag]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://txchyon-blog.pages.dev");
const prerender = true;
async function getStaticPaths({ paginate }) {
  const allPosts = await getCollection("blog");
  const allTags = /* @__PURE__ */ new Set();
  allPosts.map((post) => {
    post.data.tags && post.data.tags.map((tag) => allTags.add(tag));
  });
  return Array.from(allTags).flatMap((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return paginate(filteredPosts, {
      params: { tag },
      pageSize: PAGE_SIZE
    });
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const { tag } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$Default, { "content": { title: `Posts by Tag: ${tag}`, description: `all of the articles we have posted and linked so far under the tag: ${tag}` } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPreviewList", $$PostPreviewList, { "posts": page.data })} ${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/tags/[tag]/[page].astro", void 0);

const $$file = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/tags/[tag]/[page].astro";
const $$url = "/tags/[tag]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____page_$1 as _, index$2 as a, _slug_ as b, ____page_ as c, index$1 as d, index as e, _page_ as f, index$3 as i, media as m };
