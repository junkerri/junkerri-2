import Stripe from 'stripe';
import { c as createInvalidVariablesError, g as getEnv$1, s as setOnSetGetEnv } from './runtime_BTBNygwb.mjs';

const schema = {"STRIPE_PUBLIC_KEY":{"context":"client","access":"public","type":"string"},"STRIPE_SECRET_KEY":{"context":"server","access":"secret","type":"string"},"SITE":{"context":"server","access":"public","default":"https://junkerri.com","type":"string"}};

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

setOnSetGetEnv(() => {
	STRIPE_SECRET_KEY = _internalGetSecret("STRIPE_SECRET_KEY");

});
const SITE = "https://junkerri.com";let STRIPE_SECRET_KEY = _internalGetSecret("STRIPE_SECRET_KEY");

let stripe = null;
function getStripe() {
  if (!stripe && STRIPE_SECRET_KEY) {
    try {
      stripe = new Stripe(STRIPE_SECRET_KEY, {
        apiVersion: "2025-07-30.basil"
      });
      console.log("✅ Stripe initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize Stripe:", error);
      return null;
    }
  }
  return stripe;
}
async function fetchStripeProducts() {
  const stripe2 = getStripe();
  if (!stripe2) {
    throw new Error("Stripe not initialized");
  }
  try {
    console.log("🔍 Fetching products from Stripe...");
    let allProducts = [];
    let hasMore = true;
    let startingAfter;
    console.log("🔍 Making initial Stripe API call...");
    const initialProducts = await stripe2.products.list({
      active: true,
      expand: ["data.default_price", "data.prices"],
      limit: 100
    });
    console.log("📦 Initial API response:", {
      dataLength: initialProducts.data.length,
      hasMore: initialProducts.has_more,
      totalCount: initialProducts.data.length,
      firstProductId: initialProducts.data[0]?.id,
      lastProductId: initialProducts.data[initialProducts.data.length - 1]?.id
    });
    if (initialProducts.has_more) {
      console.log("🔄 More products available, attempting pagination...");
      let allProducts2 = [...initialProducts.data];
      let hasMore2 = initialProducts.has_more;
      let startingAfter2 = initialProducts.data[initialProducts.data.length - 1].id;
      while (hasMore2) {
        console.log(`🔄 Fetching next batch starting after: ${startingAfter2}`);
        const products = await stripe2.products.list({
          active: true,
          expand: ["data.default_price", "data.prices"],
          limit: 100,
          starting_after: startingAfter2
        });
        console.log(`📦 Batch response:`, {
          dataLength: products.data.length,
          hasMore: products.has_more,
          url: products.url
        });
        allProducts2 = allProducts2.concat(products.data);
        console.log(
          `📦 Fetched ${products.data.length} products (total so far: ${allProducts2.length})`
        );
        hasMore2 = products.has_more;
        if (hasMore2 && products.data.length > 0) {
          startingAfter2 = products.data[products.data.length - 1].id;
        }
      }
      console.log(
        `📦 Total products found with pagination: ${allProducts2.length}`
      );
      return allProducts2;
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
async function createCheckoutSession(items, currentPageUrl, orderTotal) {
  const stripe2 = getStripe();
  if (!stripe2) {
    throw new Error("Stripe not initialized");
  }
  try {
    const baseUrl = currentPageUrl || SITE || "https://junkerri.com";
    console.log("🌐 Using base URL for checkout:", baseUrl);
    console.log("💰 Order total for shipping calculation:", orderTotal);
    const shippingOptions = [];
    if (orderTotal && orderTotal >= 75) {
      shippingOptions.push({
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            // Free
            currency: "usd"
          },
          display_name: "Free Standard Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 3
            },
            maximum: {
              unit: "business_day",
              value: 7
            }
          }
        }
      });
    } else {
      shippingOptions.push({
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 500,
            // $5.00 in cents
            currency: "usd"
          },
          display_name: "Standard Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 3
            },
            maximum: {
              unit: "business_day",
              value: 7
            }
          }
        }
      });
    }
    shippingOptions.push({
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: {
          amount: 1500,
          // $15.00 in cents
          currency: "usd"
        },
        display_name: "Express Shipping",
        delivery_estimate: {
          minimum: {
            unit: "business_day",
            value: 1
          },
          maximum: {
            unit: "business_day",
            value: 3
          }
        }
      }
    });
    const session = await stripe2.checkout.sessions.create({
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
          "KR"
        ]
      },
      // Enable shipping options based on order total
      shipping_options: shippingOptions
    });
    return session;
  } catch (error) {
    console.error("❌ Error creating checkout session:", error);
    throw error;
  }
}

export { createCheckoutSession as c, fetchStripeProducts as f };
