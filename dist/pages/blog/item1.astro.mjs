export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/item1_SQ9mJdLq.mjs').then(n => n.i);

export { page };
