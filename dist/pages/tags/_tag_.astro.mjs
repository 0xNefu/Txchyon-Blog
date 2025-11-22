export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/prerender_rKCkq_K0.mjs').then(n => n.e);

export { page };
