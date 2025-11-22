import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_X-xMHih5.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Post } from './item1_EbRybj6v.mjs';

const html = "<p>П﻿роба пера</p>\n<p><img src=\"/images/uploads/190092ee-dc26-42fc-8ad6-9344e3b9a1b8.jpeg\" alt=\"\"></p>";

				const frontmatter = {"layout":"$/layouts/post.astro","title":"My title","description":"it`s simple","author":"ВГ","authorTwitter":"лдт","date":"2024-02-22T10:11:06.408Z"};
				const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/pages/blog/my-title.md";
				const url = "/blog/my-title";
				function rawContent() {
					return "П﻿роба пера\r\n\r\n![](/images/uploads/190092ee-dc26-42fc-8ad6-9344e3b9a1b8.jpeg)";
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
