import { c as createCheckoutSession } from '../../../chunks/stripe_Db0Ezs2_.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { items, currentPageUrl, orderTotal } = body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid items data"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    console.log("🛒 Creating checkout session for items:", items);
    console.log("🌐 Current page URL for redirect:", currentPageUrl);
    console.log("💰 Order total for shipping:", orderTotal);
    const session = await createCheckoutSession(
      items,
      currentPageUrl,
      orderTotal
    );
    console.log("✅ Checkout session created:", session.id);
    return new Response(
      JSON.stringify({
        success: true,
        sessionId: session.id,
        url: session.url
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to create checkout session",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
