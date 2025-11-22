export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about__18L1FwK.mjs').then(n => n.k);

export { page };
