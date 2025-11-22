import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from './astro_6sNcPkev.mjs';
import { j as $$Image } from './pages/about__18L1FwK.mjs';
import 'clsx';

const frontmatter = {
  "title": "Aster vs Drift vs Hyperliquid \u2014 Where Smart Money Actually Trades in 2025",
  "description": "Volume, depth, funding rates, and slippage compared across the three major Solana perps DEXs.",
  "date": "2025-11-21",
  "author": "Txchyon Capital",
  "authorTwitter": "txchyon",
  "category": "Research",
  "tags": ["Aster", "Drift", "Hyperliquid", "Comparison"],
  "heroImage": "/perps-comparison.jpg"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metric"
          }), createVNode(_components.th, {
            children: "Aster"
          }), createVNode(_components.th, {
            children: "Drift"
          }), createVNode(_components.th, {
            children: "Hyperliquid"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Daily Volume"
          }), createVNode(_components.td, {
            children: "$1.42B"
          }), createVNode(_components.td, {
            children: "$980M"
          }), createVNode(_components.td, {
            children: "$2.11B"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Avg Funding (longs)"
          }), createVNode(_components.td, {
            children: "+0.071%/8h"
          }), createVNode(_components.td, {
            children: "+0.019%/8h"
          }), createVNode(_components.td, {
            children: "-0.008%/8h"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$1M Slippage (AST)"
          }), createVNode(_components.td, {
            children: "0.31%"
          }), createVNode(_components.td, {
            children: "0.68%"
          }), createVNode(_components.td, {
            children: "0.44%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "TVL"
          }), createVNode(_components.td, {
            children: "$0.26B"
          }), createVNode(_components.td, {
            children: "$0.18B"
          }), createVNode(_components.td, {
            children: "$0.41B"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Open Interest"
          }), createVNode(_components.td, {
            children: "$0.52B"
          }), createVNode(_components.td, {
            children: "$0.29B"
          }), createVNode(_components.td, {
            children: "$0.78B"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Verdict:"
      }), " Aster currently pays the highest funding to shorts while maintaining top-tier liquidity."]
    }), "\n", createVNode(_components.p, {
      children: "We moved 70% of our book to Aster two weeks ago \u2192 +412k funding collected, zero liquidations."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://asterdex.com",
        children: "Trade on Aster \u2192"
      })
    })]
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
const url = "src/content/blog/aster-vs-drift-vs-hyperliquid.mdx";
const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/aster-vs-drift-vs-hyperliquid.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/aster-vs-drift-vs-hyperliquid.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
