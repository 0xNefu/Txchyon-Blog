export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/rss_ZIF3SzLX.mjs').then(n => n.r);

export { page };
