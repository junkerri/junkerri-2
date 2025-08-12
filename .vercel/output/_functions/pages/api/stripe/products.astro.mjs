import { f as fetchStripeProducts } from '../../../chunks/stripe_C_CpsdR3.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    console.log("🔍 Fetching products from Stripe API...");
    const stripeProducts = await fetchStripeProducts();
    console.log(`📦 Found ${stripeProducts.length} products from Stripe`);
    return new Response(JSON.stringify({
      success: true,
      products: stripeProducts
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("❌ Error fetching Stripe products:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to fetch products from Stripe",
      details: error instanceof Error ? error.message : "Unknown error"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
