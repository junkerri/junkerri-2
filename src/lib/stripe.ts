import Stripe from "stripe";
import { STRIPE_SECRET_KEY, SITE } from "astro:env/server";

// Initialize Stripe with secret key
let stripe: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (!stripe && STRIPE_SECRET_KEY) {
    try {
      stripe = new Stripe(STRIPE_SECRET_KEY, {
        apiVersion: "2025-07-30.basil",
      });
      console.log("✅ Stripe initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize Stripe:", error);
      return null;
    }
  }
  return stripe;
}

// Fetch all active products with their default prices
export async function fetchStripeProducts() {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Stripe not initialized");
  }

  try {
    console.log("🔍 Fetching products from Stripe...");

    let allProducts: any[] = [];
    let hasMore = true;
    let startingAfter: string | undefined;

    // Try a single call first to see what we get
    console.log("🔍 Making initial Stripe API call...");

    const initialProducts = await stripe.products.list({
      active: true,
      expand: ["data.default_price", "data.prices"],
      limit: 100,
    });

    console.log("📦 Initial API response:", {
      dataLength: initialProducts.data.length,
      hasMore: initialProducts.has_more,
      totalCount: initialProducts.data.length,
      firstProductId: initialProducts.data[0]?.id,
      lastProductId: initialProducts.data[initialProducts.data.length - 1]?.id,
    });

    // If we have more products, try pagination
    if (initialProducts.has_more) {
      console.log("🔄 More products available, attempting pagination...");

      let allProducts: any[] = [...initialProducts.data];
      let hasMore: boolean = initialProducts.has_more;
      let startingAfter =
        initialProducts.data[initialProducts.data.length - 1].id;

      while (hasMore) {
        console.log(`🔄 Fetching next batch starting after: ${startingAfter}`);

        const products = await stripe.products.list({
          active: true,
          expand: ["data.default_price", "data.prices"],
          limit: 100,
          starting_after: startingAfter,
        });

        console.log(`📦 Batch response:`, {
          dataLength: products.data.length,
          hasMore: products.has_more,
          url: products.url,
        });

        allProducts = allProducts.concat(products.data);
        console.log(
          `📦 Fetched ${products.data.length} products (total so far: ${allProducts.length})`
        );

        hasMore = products.has_more;
        if (hasMore && products.data.length > 0) {
          startingAfter = products.data[products.data.length - 1].id;
        }
      }

      console.log(
        `📦 Total products found with pagination: ${allProducts.length}`
      );
      return allProducts;
    } else {
      console.log("📦 No pagination needed, returning initial products");
      return initialProducts.data;
    }

    console.log(`📦 Total products found: ${allProducts.length}`);
    return allProducts;
  } catch (error) {
    console.error("❌ Error fetching Stripe products:", error);
    throw error;
  }
}

// Create a checkout session
export async function createCheckoutSession(
  items: Array<{ price: string; quantity: number }>,
  currentPageUrl?: string,
  orderTotal?: number
) {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Stripe not initialized");
  }

  try {
    // Use current page URL if provided, otherwise fall back to site URL
    const baseUrl = currentPageUrl || SITE || "https://junkerri.com";
    console.log("🌐 Using base URL for checkout:", baseUrl);
    console.log("💰 Order total for shipping calculation:", orderTotal);

    // Determine shipping options based on order total
    const shippingOptions: Stripe.Checkout.SessionCreateParams.ShippingOption[] =
      [];

    if (orderTotal && orderTotal >= 75) {
      // Free standard shipping for orders over $75
      shippingOptions.push({
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0, // Free
            currency: "usd",
          },
          display_name: "Free Standard Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 3,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      });
    } else {
      // Paid standard shipping for orders under $75
      shippingOptions.push({
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 500, // $5.00 in cents
            currency: "usd",
          },
          display_name: "Standard Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 3,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      });
    }

    // Always include express shipping option
    shippingOptions.push({
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: {
          amount: 1500, // $15.00 in cents
          currency: "usd",
        },
        display_name: "Express Shipping",
        delivery_estimate: {
          minimum: {
            unit: "business_day",
            value: 1,
          },
          maximum: {
            unit: "business_day",
            value: 3,
          },
        },
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items,
      mode: "payment",
      success_url: `${baseUrl}?success=true`,
      cancel_url: `${baseUrl}?canceled=true`,
      // Add shipping address collection for physical products
      shipping_address_collection: {
        allowed_countries: [
          "US",
          "CA",
          "GB",
          "AU",
          "DE",
          "FR",
          "IT",
          "ES",
          "NL",
          "BE",
          "AT",
          "CH",
          "SE",
          "NO",
          "DK",
          "FI",
          "IE",
          "NZ",
          "JP",
          "SG",
          "KR",
        ],
      },
      // Enable shipping options based on order total
      shipping_options: shippingOptions,
    });

    return session;
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    throw error;
  }
}
