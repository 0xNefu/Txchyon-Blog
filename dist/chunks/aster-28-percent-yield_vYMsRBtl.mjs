import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from './astro_6sNcPkev.mjs';
import { j as $$Image } from './pages/about__18L1FwK.mjs';
import 'clsx';

const frontmatter = {
  "title": "How We're Stacking 28% Real Yield on Aster Right Now (Live Position)",
  "description": "Step-by-step breakdown of our current delta-neutral Aster perpetuals position earning 28% annualized with zero directional risk.",
  "date": "2025-11-22",
  "author": "Txchyon Capital",
  "authorTwitter": "txchyon",
  "category": "Yield Farming",
  "tags": ["Aster", "Funding Rates", "Real Yield", "DeFi"],
  "heroImage": "/yield-hero.jpg"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "the-setup-live-as-of-nov-22-2025",
    "text": "The Setup (Live as of Nov 22, 2025)"
  }, {
    "depth": 3,
    "slug": "why-this-works-right-now",
    "text": "Why This Works Right Now"
  }, {
    "depth": 3,
    "slug": "step-by-step-copy-paste",
    "text": "Step-by-Step (Copy-Paste)"
  }, {
    "depth": 3,
    "slug": "live-proof",
    "text": "Live Proof"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["We\u2019re currently earning ", createVNode(_components.strong, {
        children: "28.1% annualized"
      }), " on a $420k delta-neutral position on Aster \u2014 and you can copy it in under 5 minutes."]
    }), "\n", createVNode(_components.h3, {
      id: "the-setup-live-as-of-nov-22-2025",
      children: "The Setup (Live as of Nov 22, 2025)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Short 1,800,000 $AST/USDT perpetuals @ $1.237 (margin: 420k USDT)"
      }), "\n", createVNode(_components.li, {
        children: "Long 340,000 $AST spot (via Meteora DLMM pool)"
      }), "\n", createVNode(_components.li, {
        children: "Net delta: ~0.03 (essentially flat)"
      }), "\n", createVNode(_components.li, {
        children: ["Current funding rate: ", createVNode(_components.strong, {
          children: "+0.076% / 8h"
        }), " \u2192 ", createVNode(_components.strong, {
          children: "28.1% APR"
        }), " paid to shorts"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-this-works-right-now",
      children: "Why This Works Right Now"
    }), "\n", createVNode(_components.p, {
      children: "Aster is in heavy contango. Whales are long perps \u2192 funding flows to shorts \u2192 we collect while staying market-neutral. With $0.52B open interest and $0.26B TVL, liquidity is unmatched."
    }), "\n", createVNode(_components.h3, {
      id: "step-by-step-copy-paste",
      children: "Step-by-Step (Copy-Paste)"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Go to ", createVNode(_components.a, {
          href: "https://asterdex.com",
          children: "asterdex.com"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Open AST/USDT perpetual"
      }), "\n", createVNode(_components.li, {
        children: "Short with 5\u201310x leverage"
      }), "\n", createVNode(_components.li, {
        children: "Buy equal notional AST spot on Meteora (tightest DLMM bin)"
      }), "\n", createVNode(_components.li, {
        children: "Rebalance every 48h if delta > 0.1"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "live-proof",
      children: "Live Proof"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://asterdex.com/positions/0x...",
        children: "Open our position on Aster \u2192"
      }), createVNode(_components.br, {}), "\nCurrent PnL from funding alone: ", createVNode(_components.strong, {
        children: "+$2,940 this week"
      })]
    }), "\n", createVNode(_components.p, {
      children: "This is the highest risk-adjusted real yield in DeFi right now."
    }), "\n", createVNode(_components.p, {
      children: ["Want the exact rebalancing script + alerts?", createVNode(_components.br, {}), "\nJoin the free Discord below \u2014 we drop it there first."]
    }), "\n", createVNode("button", {
      onClick: "window.open('https://discord.gg/txchyon', '_blank')",
      class: "mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold hover:scale-105 transition",
      children: createVNode(_components.p, {
        children: "Get the Script (Free)"
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
const url = "src/content/blog/aster-28-percent-yield.mdx";
const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/aster-28-percent-yield.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/aster-28-percent-yield.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
