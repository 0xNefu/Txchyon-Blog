export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/item1_EbRybj6v.mjs').then(n => n.i);

export { page };
