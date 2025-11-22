import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from './astro_X-xMHih5.mjs';
import { k as $$Image } from './pages/about_xkxDVZnb.mjs';
import 'clsx';

const frontmatter = {
  "title": "KloutGG Is Quietly Becoming the Social Graph of Solana",
  "description": "How Klout is turning on-chain activity into verifiable social capital \u2014 and why Klout score will matter more than follower count in 2026.",
  "date": "2025-11-21",
  "author": "Txchyon",
  "authorTwitter": "txchyon",
  "category": "SocialFi",
  "tags": ["KloutGG", "SocialFi", "Reputation", "Solana"],
  "heroImage": "/klout-hero.jpg"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "what-klout-actually-measures",
    "text": "What Klout Actually Measures"
  }, {
    "depth": 3,
    "slug": "current-use-cases-live-nov-2025",
    "text": "Current Use Cases (Live Nov 2025)"
  }, {
    "depth": 3,
    "slug": "our-klout-play",
    "text": "Our Klout Play"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "KloutGG just crossed 420,000 verified Solana wallets \u2014 and almost nobody is talking about it."
    }), "\n", createVNode(_components.h3, {
      id: "what-klout-actually-measures",
      children: "What Klout Actually Measures"
    }), "\n", createVNode(_components.p, {
      children: "Your Klout score is calculated from 40+ on-chain signals:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Volume traded (weighted by venue)"
      }), "\n", createVNode(_components.li, {
        children: "Liquidity provided"
      }), "\n", createVNode(_components.li, {
        children: "Governance participation"
      }), "\n", createVNode(_components.li, {
        children: "NFT floor ownership"
      }), "\n", createVNode(_components.li, {
        children: "DeFi protocol seniority"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "No bots. No fake followers. Pure on-chain truth."
    }), "\n", createVNode(_components.h3, {
      id: "current-use-cases-live-nov-2025",
      children: "Current Use Cases (Live Nov 2025)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Backpack: Klout 80+ = instant whitelist for all drops"
      }), "\n", createVNode(_components.li, {
        children: "Tensor: Top 5% Klout = fee rebate"
      }), "\n", createVNode(_components.li, {
        children: "Marginfi: Higher borrow limits"
      }), "\n", createVNode(_components.li, {
        children: "Pump.fun: Top 1% Klout = early access to new launches"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "our-klout-play",
      children: "Our Klout Play"
    }), "\n", createVNode(_components.p, {
      children: "We\u2019re in the top 0.3% globally (Klout 94) \u2014 purely from on-chain volume and longevity."
    }), "\n", createVNode(_components.p, {
      children: "We expect Klout score to be the primary signal for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Token allocations"
      }), "\n", createVNode(_components.li, {
        children: "Alpha group access"
      }), "\n", createVNode(_components.li, {
        children: "Job offers in crypto"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "It\u2019s the reputation layer Solana desperately needed."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://klout.gg",
        children: "Check your Klout score \u2192"
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
const url = "src/content/blog/kloutgg-solana-social-infra.mdx";
const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/kloutgg-solana-social-infra.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/kloutgg-solana-social-infra.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
