import type { APIRoute } from 'astro';
import { createCheckoutSession } from '../../../lib/stripe.js';

export const prerender = false; // Enable server-side rendering

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid items data'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    console.log('🛒 Creating checkout session for items:', items);

    // Create Stripe checkout session
    const session = await createCheckoutSession(items);

    console.log('✅ Checkout session created:', session.id);

    return new Response(JSON.stringify({
      success: true,
      sessionId: session.id,
      url: session.url
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('❌ Error creating checkout session:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to create checkout session',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
