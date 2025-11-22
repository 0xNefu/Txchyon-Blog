import { _ as __astro_tag_component__, F as Fragment, n as createVNode } from './astro_6sNcPkev.mjs';
import { j as $$Image } from './pages/about__18L1FwK.mjs';
import 'clsx';

const frontmatter = {
  "title": "iopn Is the Quietest 100x Infrastructure Play on Solana Right Now",
  "description": "Why the iopn network is becoming the de facto AI agent execution layer on Solana \u2014 and why we\u2019re accumulating hard below $0.40.",
  "date": "2025-11-23",
  "author": "Txchyon",
  "authorTwitter": "txchyon",
  "category": "Infrastructure",
  "tags": ["iopn", "AI Agents", "Solana", "RPC", "DePIN"],
  "heroImage": "/iopn-hero.jpg"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "what-iopn-actually-is-2025-version",
    "text": "What iopn Actually Is (2025 version)"
  }, {
    "depth": 3,
    "slug": "why-were-accumulating-below-040",
    "text": "Why We\u2019re Accumulating Below $0.40"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "You haven\u2019t heard of iopn yet \u2014 and that\u2019s exactly why it\u2019s the best risk/reward in crypto right now."
    }), "\n", createVNode(_components.h3, {
      id: "what-iopn-actually-is-2025-version",
      children: "What iopn Actually Is (2025 version)"
    }), "\n", createVNode(_components.p, {
      children: "iopn is a decentralized, high-performance RPC + compute layer purpose-built for autonomous AI agents on Solana."
    }), "\n", createVNode(_components.p, {
      children: "Current stats (Nov 23, 2025):"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1.8M daily agent transactions"
      }), "\n", createVNode(_components.li, {
        children: "42,000 active agents deployed"
      }), "\n", createVNode(_components.li, {
        children: "2.7ms average finality"
      }), "\n", createVNode(_components.li, {
        children: "68% cheaper than centralized RPCs for agent workloads"
      }), "\n", createVNode(_components.li, {
        children: "Fully on-chain proof system via zkLogin + TEE"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-were-accumulating-below-040",
      children: "Why We\u2019re Accumulating Below $0.40"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Every major AI agent project launching in Q4 2025\u2013Q1 2026 is quietly migrating to iopn infra."
      }), "\n", createVNode(_components.li, {
        children: "Revenue accrual model: 30% of all agent fees go straight to $IOPN stakers."
      }), "\n", createVNode(_components.li, {
        children: "Current FDV: ~$312M \u2014 still sub-$500M while doing $1.2M monthly revenue."
      }), "\n", createVNode(_components.li, {
        children: "Supply locked: 78% of circulating supply staked."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "We\u2019ve been buying the dip every day since $0.28 and will continue until mainnet v2 ships (expected Jan 2026)."
    }), "\n", createVNode(_components.p, {
      children: "Position: Long $IOPN spot + running 3 validator nodes."
    }), "\n", createVNode(_components.p, {
      children: "The AI agent meta hasn\u2019t even started. iopn is the pick-and-shovel play."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://iopn.network",
        children: "Track iopn live \u2192"
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
const url = "src/content/blog/iopn-solana-ai-agent-infra.mdx";
const file = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/iopn-solana-ai-agent-infra.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/NefuTrades/txchyon-capital-blog/src/content/blog/iopn-solana-ai-agent-infra.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
