# 🛒 Stripe Setup for Template Sales

This guide will help you set up Stripe to sell your Astro template as a digital product.

## 🎯 Product Setup

### 1. Create Template Products in Stripe

You'll need to create three products in your Stripe dashboard:

#### Basic License - $49

- **Product Name**: "Junkerri Astro Template - Basic License"
- **Description**: "Single website use license for personal projects and portfolios"
- **Price**: $49.00 USD
- **Billing**: One-time payment

#### Developer License - $99

- **Product Name**: "Junkerri Astro Template - Developer License"
- **Description**: "Up to 5 websites with priority support and 2-year updates"
- **Price**: $99.00 USD
- **Billing**: One-time payment

#### Agency License - $199

- **Product Name**: "Junkerri Astro Template - Agency License"
- **Description**: "Unlimited websites with lifetime updates and white-label rights"
- **Price**: $199.00 USD
- **Billing**: One-time payment

### 2. Stripe Dashboard Setup

1. **Log into Stripe Dashboard**: [dashboard.stripe.com](https://dashboard.stripe.com)
2. **Go to Products**: Navigate to Products → Add Product
3. **Create each license tier** with the details above
4. **Set prices** as one-time payments (not recurring)
5. **Enable digital delivery** for instant access

### 3. Environment Variables

Update your `.env` file with Stripe keys:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_...  # Use test keys for development
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Template Product IDs (get these from Stripe dashboard)
STRIPE_BASIC_LICENSE_PRICE_ID=price_...
STRIPE_DEV_LICENSE_PRICE_ID=price_...
STRIPE_AGENCY_LICENSE_PRICE_ID=price_...
```

## 🔗 Integration with Sales Page

### 1. Update Template Sales Page

Modify `src/pages/template.astro` to include Stripe checkout:

```tsx
// Add this to your template features
const stripePrices = {
  basic: process.env.STRIPE_BASIC_LICENSE_PRICE_ID,
  developer: process.env.STRIPE_DEV_LICENSE_PRICE_ID,
  agency: process.env.STRIPE_AGENCY_LICENSE_PRICE_ID,
};

// Update buttons to trigger Stripe checkout
<Button
  onClick={() => handlePurchase("basic")}
  size="lg"
  className="text-lg px-8 py-6"
>
  Get Template - $49
</Button>;
```

### 2. Create Purchase Handler

Add this React component to handle purchases:

```tsx
const handlePurchase = async (
  licenseType: "basic" | "developer" | "agency"
) => {
  const priceId = stripePrices[licenseType];

  try {
    const response = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId,
        licenseType,
        successUrl: `${window.location.origin}/template/success`,
        cancelUrl: `${window.location.origin}/template`,
      }),
    });

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    console.error("Purchase failed:", error);
  }
};
```

## 📧 Digital Delivery Setup

### 1. Create Download Links

After successful payment, customers need access to:

- **Source Code ZIP**: Complete project files
- **Documentation**: Setup guides and API docs
- **License File**: PDF license agreement
- **Support Access**: Community or support channel

### 2. Stripe Webhook for Delivery

Set up a webhook to automatically deliver the template:

```typescript
// src/pages/api/stripe/webhook.ts
export async function POST({ request }: { request: Request }) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Send download email
      await sendTemplateDownloadEmail(session.customer_details.email);

      // Update customer database
      await updateCustomerLicense(
        session.customer_details.email,
        session.metadata.licenseType
      );
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Webhook failed" }), {
      status: 400,
    });
  }
}
```

### 3. Email Delivery System

Create an email template for template delivery:

```typescript
// src/lib/email.ts
export async function sendTemplateDownloadEmail(
  email: string,
  licenseType: string
) {
  const downloadLinks = {
    basic: "https://your-domain.com/downloads/basic-template.zip",
    developer: "https://your-domain.com/downloads/developer-template.zip",
    agency: "https://your-domain.com/downloads/agency-template.zip",
  };

  const emailContent = `
    Thank you for purchasing the Junkerri Astro Template!
    
    Your ${licenseType} license includes:
    - Complete source code
    - Documentation and setup guides
    - Commercial usage rights
    - Support access
    
    Download your template: ${downloadLinks[licenseType]}
    
    Need help? Contact us at support@yourdomain.com
  `;

  // Send email using your preferred service (SendGrid, Mailgun, etc.)
}
```

## 💰 Payment Flow

### 1. Customer Journey

1. **Land on sales page** (`/template`)
2. **Choose license tier** (Basic/Developer/Agency)
3. **Click purchase button** → Stripe Checkout
4. **Complete payment** → Webhook triggers
5. **Receive download email** → Access template files
6. **Support access** → Community/support channels

### 2. Success Page

Create `src/pages/template/success.astro`:

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import SEO from "../../components/SEO.astro";
---

<BaseLayout>
  <SEO title="Template Purchase Successful" />

  <div class="container mx-auto px-4 py-20 text-center">
    <h1 class="text-4xl font-bold text-green-600 mb-6">
      🎉 Purchase Successful!
    </h1>
    <p class="text-xl mb-8">
      Thank you for purchasing the Junkerri Astro Template!
    </p>
    <div class="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">What's Next?</h2>
      <ul class="text-left space-y-3">
        <li>✅ Check your email for download instructions</li>
        <li>✅ Download the complete source code</li>
        <li>✅ Follow the setup guide in TEMPLATE_SETUP.md</li>
        <li>✅ Join our community for support</li>
      </ul>
    </div>
  </div>
</BaseLayout>
```

## 🚀 Marketing Features

### 1. Analytics Tracking

Track template sales with Google Analytics:

```typescript
// Add to purchase success
gtag("event", "purchase", {
  transaction_id: session.id,
  value: session.amount_total / 100,
  currency: session.currency,
  items: [
    {
      item_id: licenseType,
      item_name: `Astro Template - ${licenseType} License`,
      price: session.amount_total / 100,
      quantity: 1,
    },
  ],
});
```

### 2. Affiliate System

Consider adding affiliate tracking:

```typescript
// Track affiliate clicks
const affiliateCode = new URLSearchParams(window.location.search).get("ref");
if (affiliateCode) {
  localStorage.setItem("affiliate", affiliateCode);
}
```

## 🔒 Legal Considerations

### 1. License Agreement

Create a comprehensive license file:

- **Usage rights** (single site, multiple sites, etc.)
- **Redistribution restrictions**
- **Support terms**
- **Warranty disclaimers**
- **Termination conditions**

### 2. Terms of Service

Include terms for:

- **Refund policy** (30-day guarantee)
- **Support limitations**
- **Update frequency**
- **Compatibility requirements**

## 📊 Performance Monitoring

### 1. Track Key Metrics

- **Conversion rate** from sales page to purchase
- **Average order value** by license type
- **Customer acquisition cost**
- **Support ticket volume**
- **Refund rate**

### 2. A/B Testing

Test different:

- **Pricing strategies**
- **Feature descriptions**
- **CTA button text**
- **Page layouts**

---

**Need help with Stripe setup?** Check the [Stripe documentation](https://stripe.com/docs) or contact their support team.


