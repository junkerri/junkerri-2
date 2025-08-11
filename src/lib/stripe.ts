import Stripe from 'stripe';
import { STRIPE_SECRET_KEY, SITE } from 'astro:env/server';

// Initialize Stripe with secret key
let stripe: Stripe | null = null;

export function getStripe(): Stripe | null {
  if (!stripe && STRIPE_SECRET_KEY) {
    try {
      stripe = new Stripe(STRIPE_SECRET_KEY, {
        apiVersion: '2025-07-30.basil',
      });
      console.log('✅ Stripe initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Stripe:', error);
      return null;
    }
  }
  return stripe;
}

// Fetch all active products with their default prices
export async function fetchStripeProducts() {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error('Stripe not initialized');
  }

  try {
    console.log('🔍 Fetching products from Stripe...');
    
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    console.log(`📦 Found ${products.data.length} products from Stripe`);
    
    return products.data;
  } catch (error) {
    console.error('❌ Error fetching Stripe products:', error);
    throw error;
  }
}

// Create a checkout session
export async function createCheckoutSession(items: Array<{ price: string; quantity: number }>) {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error('Stripe not initialized');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url: `${SITE}/shop?success=true`,
      cancel_url: `${SITE}/shop?canceled=true`,
    });

    return session;
  } catch (error) {
    console.error('❌ Error creating checkout session:', error);
    throw error;
  }
}
