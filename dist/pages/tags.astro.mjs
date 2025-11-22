export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/prerender_EZ0_Nga8.mjs').then(n => n.d);

export { page };
