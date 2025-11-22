const client = /* @__PURE__ */ new Map();
const getViewsBySlug = async (slug) => {
  if (slug) {
    const prevValue = client.get(slug);
    let newValue = 1;
    if (prevValue) {
      newValue = parseInt(`${prevValue}`) + 1;
      client.set(slug, newValue);
    } else {
      client.set(slug, 1);
    }
    return newValue;
  }
  return 0;
};

const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      views: params.slug ? await getViewsBySlug(params.slug) : 0
    })
  );
};

export { GET };
