import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_CuC082BX.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_Dr_gzUQl.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://junkerri.com");
const prerender = false;
const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shop;
  let products = [];
  let categories = ["All"];
  try {
    const response = await fetch(`${Astro2.url.origin}/api/stripe/products`);
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        console.log("\u{1F50D} Raw products from Stripe:", data.products);
        console.log(`\u{1F4E6} Total products from Stripe: ${data.products.length}`);
        data.products.forEach((product, index) => {
          console.log(`\u{1F50D} Product ${index + 1}:`, {
            id: product.id,
            name: product.name,
            hasDefaultPrice: !!product.default_price,
            hasUnitAmount: !!product.default_price?.unit_amount,
            priceData: product.default_price,
            active: product.active,
            metadata: product.metadata
          });
        });
        products = data.products.filter((product) => {
          const hasPrice = product.default_price && product.default_price.unit_amount;
          if (!hasPrice) {
            console.log(`\u26A0\uFE0F Product "${product.name}" filtered out - missing price data:`, {
              hasDefaultPrice: !!product.default_price,
              hasUnitAmount: !!product.default_price?.unit_amount,
              priceData: product.default_price
            });
          }
          return hasPrice;
        }).map((product) => {
          const mappedProduct = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.default_price.unit_amount / 100,
            // Convert cents to dollars
            image: product.images?.[0] || "../assets/blog-images/blog-placeholder-1.jpg",
            category: product.metadata?.category || "Uncategorized",
            inStock: product.metadata?.inStock !== "false",
            // Default to true unless explicitly set to false
            stripePriceId: product.default_price.id
          };
          console.log("\u{1F6CD}\uFE0F Mapped product:", mappedProduct);
          return mappedProduct;
        });
        const uniqueCategories = [...new Set(products.map((p) => p.category))];
        categories = ["All", ...uniqueCategories];
        console.log("\u{1F6CD}\uFE0F Final products after filtering:", products);
        console.log(`\u{1F4CA} Found ${products.length} products with valid prices out of ${data.products.length} total products`);
      }
    }
  } catch (error) {
    console.error("\u274C Error loading products:", error);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Shop - Junkerri", "description": "Original artwork, prints, and merchandise", "data-astro-cid-5w43p2qc": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5w43p2qc": true })} ${maybeRenderHead()}<main class="shop-page" data-astro-cid-5w43p2qc> <!-- Hero Section --> <section class="py-12 relative overflow-hidden cosmic-universe-background" data-astro-cid-5w43p2qc> <!-- Cosmic Background --> <div class="cosmic-bg" data-astro-cid-5w43p2qc></div> <!-- Stars Layer --> <div class="stars-container" data-astro-cid-5w43p2qc> <div class="stars stars-1" data-astro-cid-5w43p2qc></div> <div class="stars stars-2" data-astro-cid-5w43p2qc></div> <div class="stars stars-3" data-astro-cid-5w43p2qc></div> </div> <!-- Nebulae and Cosmic Clouds --> <div class="cosmic-nebulae" data-astro-cid-5w43p2qc> <div class="nebula nebula-1" data-astro-cid-5w43p2qc></div> <div class="nebula nebula-2" data-astro-cid-5w43p2qc></div> <div class="nebula nebula-3" data-astro-cid-5w43p2qc></div> </div> <!-- Floating Space Geometry --> <div class="cosmic-geometry" data-astro-cid-5w43p2qc> <div class="cosmic-cube cosmic-cube-1" data-astro-cid-5w43p2qc></div> <div class="cosmic-pyramid cosmic-pyramid-1" data-astro-cid-5w43p2qc></div> <div class="cosmic-sphere cosmic-sphere-1" data-astro-cid-5w43p2qc></div> <div class="cosmic-cube cosmic-cube-2" data-astro-cid-5w43p2qc></div> <div class="cosmic-pyramid cosmic-pyramid-2" data-astro-cid-5w43p2qc></div> <div class="cosmic-sphere cosmic-sphere-2" data-astro-cid-5w43p2qc></div> <div class="cosmic-asteroid" data-astro-cid-5w43p2qc></div> <div class="cosmic-satellite" data-astro-cid-5w43p2qc></div> <!-- Additional geometric elements for more visual impact --> <div class="cosmic-cube" style="top: 25%; left: 15%; transform: rotate(60deg) scale(0.8); animation-delay: 2s;" data-astro-cid-5w43p2qc></div> <div class="cosmic-pyramid" style="top: 75%; right: 25%; transform: scale(0.6); animation-delay: 1.5s;" data-astro-cid-5w43p2qc></div> <div class="cosmic-sphere" style="top: 45%; left: 75%; transform: scale(0.7); animation-delay: 2.5s;" data-astro-cid-5w43p2qc></div> <div class="cosmic-cube" style="bottom: 30%; right: 10%; transform: rotate(30deg) scale(0.5); animation-delay: 1s;" data-astro-cid-5w43p2qc></div> </div> <!-- Cosmic Dust Particles --> <div class="cosmic-dust" data-astro-cid-5w43p2qc> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> <div class="dust-particle" data-astro-cid-5w43p2qc></div> </div> <!-- Shooting Stars --> <div class="shooting-stars" data-astro-cid-5w43p2qc> <div class="shooting-star" data-astro-cid-5w43p2qc></div> <div class="shooting-star" data-astro-cid-5w43p2qc></div> <div class="shooting-star" data-astro-cid-5w43p2qc></div> </div> <!-- Mandela Art Circles --> <div class="mandela-orb mandela-orb-1" style="position: absolute; top: 20%; left: 20%; width: 100px; height: 100px; background: linear-gradient(135deg, #00ffb1, #e500ff, #5e00ff); border-radius: 50%; box-shadow: 0 0 20px rgba(0, 255, 177, 0.5); z-index: 5;" data-astro-cid-5w43p2qc></div> <div class="mandela-orb mandela-orb-2" style="position: absolute; top: 60%; right: 20%; width: 150px; height: 150px; background: linear-gradient(135deg, #e500ff, #5e00ff, #00ffb1); border-radius: 50%; box-shadow: 0 0 20px rgba(229, 0, 255, 0.5); z-index: 5;" data-astro-cid-5w43p2qc></div> <div class="mandela-orb mandela-orb-3" style="position: absolute; bottom: 20%; left: 60%; width: 80px; height: 80px; background: linear-gradient(135deg, #5e00ff, #00ffb1, #e500ff); border-radius: 50%; box-shadow: 0 0 20px rgba(94, 0, 255, 0.5); z-index: 5;" data-astro-cid-5w43p2qc></div> <div class="mandela-orb mandela-orb-4" style="position: absolute; top: 40%; left: 50%; width: 120px; height: 120px; background: linear-gradient(135deg, #00ffb1, #e500ff, #5e00ff); border-radius: 50%; box-shadow: 0 0 20px rgba(0, 255, 177, 0.5); z-index: 5;" data-astro-cid-5w43p2qc></div> <div class="absolute inset-0 bg-gradient-to-br from-cyberpunk-cyan/10 via-cyberpunk-pink/15 to-cyberpunk-purple/20" data-astro-cid-5w43p2qc></div> <div class="container relative z-10" data-astro-cid-5w43p2qc> <div class="max-w-4xl mx-auto text-center" data-astro-cid-5w43p2qc> <h1 class="cosmic-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider leading-tight" data-astro-cid-5w43p2qc> <span class="inline-block animate-cosmic-letter-float" style="animation-delay: 0s;" data-astro-cid-5w43p2qc>S</span> <span class="inline-block animate-cosmic-letter-float" style="animation-delay: 0.1s;" data-astro-cid-5w43p2qc>H</span> <span class="inline-block animate-cosmic-letter-float" style="animation-delay: 0.2s;" data-astro-cid-5w43p2qc>O</span> <span class="inline-block animate-cosmic-letter-float" style="animation-delay: 0.3s;" data-astro-cid-5w43p2qc>P</span> </h1> </div> </div> </section> <!-- Filters --> <section class="py-8" data-astro-cid-5w43p2qc> <div class="container" data-astro-cid-5w43p2qc> <div class="flex flex-wrap gap-4 justify-center" data-astro-cid-5w43p2qc> ${categories.map((category) => renderTemplate`<button class="px-6 py-2 rounded-full border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"${addAttribute(category, "data-category")} data-astro-cid-5w43p2qc> ${category} </button>`)} </div> </div> </section> <!-- Product Grid --> <section class="py-20" data-astro-cid-5w43p2qc> <div class="container" data-astro-cid-5w43p2qc> <!-- Shipping Notice --> <div class="mb-6 p-3 bg-muted/30 border-l-4 border-primary/50 rounded-r text-sm" data-astro-cid-5w43p2qc> <div class="flex items-center gap-2 text-muted-foreground" data-astro-cid-5w43p2qc> <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-5w43p2qc></path> </svg> <span data-astro-cid-5w43p2qc> <span class="font-medium" data-astro-cid-5w43p2qc>Shipping:</span> Standard $5 (3-7 days) • Free standard shipping on orders over $75 • Express $15 (1-3 days) • Address collected at checkout
</span> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-5w43p2qc> ${products.map((product) => renderTemplate`<div class="group overflow-hidden rounded-lg border bg-card text-white shadow-sm hover:shadow-lg transition-all duration-300 product-item [&_h3]:text-white [&_p]:text-white [&_span]:text-white focus:text-white active:text-white focus-within:text-white [&_*]:text-white"${addAttribute(product.category, "data-category")} data-astro-cid-5w43p2qc> <div class="aspect-square overflow-hidden relative" data-astro-cid-5w43p2qc> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-astro-cid-5w43p2qc> ${!product.inStock && renderTemplate`<div class="absolute inset-0 bg-black/50 flex items-center justify-center" data-astro-cid-5w43p2qc> <span class="text-white font-semibold" data-astro-cid-5w43p2qc>Out of Stock</span> </div>`} </div> <div class="p-6" data-astro-cid-5w43p2qc> <div class="flex items-center justify-between mb-2" data-astro-cid-5w43p2qc> <span class="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" data-astro-cid-5w43p2qc> ${product.category} </span> <span class="text-lg font-bold text-primary" data-astro-cid-5w43p2qc>$${product.price}</span> </div> <h3 class="text-xl font-semibold leading-none tracking-tight mb-2 text-white" data-astro-cid-5w43p2qc>${product.name}</h3> <p class="text-sm text-muted-foreground mb-4 text-white" data-astro-cid-5w43p2qc>${product.description}</p>  ${product.name === "Unearthly Delights" && renderTemplate`<div class="mb-4" data-astro-cid-5w43p2qc> <p class="text-sm text-muted-foreground mb-2" data-astro-cid-5w43p2qc>Select Size:</p> <div class="flex gap-2" data-astro-cid-5w43p2qc> <button type="button" class="size-btn px-3 py-1 text-sm border rounded-md transition-colors bg-primary text-white border-primary" data-size="16x20" data-price="70"${addAttribute(product.id, "data-target-product")} data-astro-cid-5w43p2qc>
16 x 20
</button> <button type="button" class="size-btn px-3 py-1 text-sm border rounded-md transition-colors border-input bg-background text-white hover:bg-accent" data-size="8x10" data-price="35"${addAttribute(product.id, "data-target-product")} data-astro-cid-5w43p2qc>
8 x 10
</button> </div> </div>`} ${product.inStock ? renderTemplate`<div data-astro-cid-5w43p2qc> <button class="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"${addAttribute(product.id, "data-product-id")}${addAttribute(product.stripePriceId, "data-price-id")} style="color: black !important; font-weight: 600;" data-astro-cid-5w43p2qc>
Add to Cart
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" data-astro-cid-5w43p2qc></path> </svg> </button> </div>` : renderTemplate`<button class="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed" disabled data-astro-cid-5w43p2qc>
Out of Stock
</button>`} </div> </div>`)} </div> </div> </section> <!-- Shopping Cart Sidebar --> <div id="cart-sidebar" class="fixed top-0 right-0 h-full w-80 bg-background border-l shadow-lg transform translate-x-full transition-transform duration-300 z-50" data-astro-cid-5w43p2qc> <div class="p-6 h-full flex flex-col" data-astro-cid-5w43p2qc> <div class="flex items-center justify-between mb-6" data-astro-cid-5w43p2qc> <h3 class="text-lg font-semibold" data-astro-cid-5w43p2qc>Shopping Cart</h3> <button id="close-cart" class="text-muted-foreground hover:text-foreground" data-astro-cid-5w43p2qc> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5w43p2qc></path> </svg> </button> </div> <div id="cart-items" class="flex-1 overflow-y-auto space-y-4" data-astro-cid-5w43p2qc> <!-- Cart items will be populated by JavaScript --> </div> <div class="border-t pt-4 space-y-4" data-astro-cid-5w43p2qc> <div class="flex justify-between text-lg font-semibold" data-astro-cid-5w43p2qc> <span data-astro-cid-5w43p2qc>Total:</span> <span id="cart-total" data-astro-cid-5w43p2qc>$0</span> </div> <!-- Shipping Information --> <div class="text-sm text-muted-foreground space-y-2" data-astro-cid-5w43p2qc> <div class="flex items-center gap-2" data-astro-cid-5w43p2qc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-5w43p2qc></path> </svg> <span id="standard-shipping-text" data-astro-cid-5w43p2qc>Standard Shipping: $5.00 (3-7 business days)</span> </div> <div class="flex items-center gap-2" data-astro-cid-5w43p2qc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-5w43p2qc></path> </svg> <span data-astro-cid-5w43p2qc>Express Shipping: $15.00 (1-3 business days)</span> </div> <div class="flex items-center gap-2" data-astro-cid-5w43p2qc> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-5w43p2qc></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-5w43p2qc></path> </svg> <span data-astro-cid-5w43p2qc>Shipping address will be collected during checkout</span> </div> </div> <button id="checkout-btn" class="w-full inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" disabled data-astro-cid-5w43p2qc>
Proceed to Checkout
</button> </div> </div> </div> <!-- Cart Overlay - No dark background --> <div id="cart-overlay" class="fixed inset-0 z-40 hidden" data-astro-cid-5w43p2qc></div> <!-- CTA Section --> <section class="py-20 bg-muted/30" data-astro-cid-5w43p2qc> <div class="container text-center" data-astro-cid-5w43p2qc> <h2 class="text-4xl font-bold mb-4" data-astro-cid-5w43p2qc>Custom Commissions</h2> <p class="text-xl mb-8 text-muted-foreground" data-astro-cid-5w43p2qc>Interested in a custom piece or bulk order?</p> <a href="/contact" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-lg font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-5w43p2qc>
Get in Touch
<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5w43p2qc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-5w43p2qc></path> </svg> </a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5w43p2qc": true })}  ${renderScript($$result2, "/Users/aasthakarki/Code/junkerri-astro/src/pages/shop.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/pages/shop.astro", void 0);

const $$file = "/Users/aasthakarki/Code/junkerri-astro/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Shop,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
