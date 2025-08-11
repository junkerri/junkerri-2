import type { APIRoute } from 'astro';
import { fetchStripeProducts } from '../../../lib/stripe.js';

export const prerender = false; // Enable server-side rendering

export const GET: APIRoute = async () => {
  try {
    console.log('🔍 Fetching products from Stripe API...');
    
    // Fetch real products from Stripe
    const stripeProducts = await fetchStripeProducts();
    
    console.log(`📦 Found ${stripeProducts.length} products from Stripe`);
    
    return new Response(JSON.stringify({
      success: true,
      products: stripeProducts
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('❌ Error fetching Stripe products:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch products from Stripe',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
