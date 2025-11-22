export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about_6_qXNLeE.mjs').then(n => n.k);

export { page };
