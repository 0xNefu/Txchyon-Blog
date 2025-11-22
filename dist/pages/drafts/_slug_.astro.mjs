export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/prerender_u-yqWZyY.mjs').then(n => n.a);

export { page };
