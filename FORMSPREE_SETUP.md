# 🔧 Fix the White Error Boxes - Formspree Setup

## The Problem

The white boxes you're seeing are error messages because the Formspree form ID `xpzgwqzw` doesn't exist or isn't active.

## Quick Fix (5 minutes)

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Your Forms

1. **Contact Form**:

   - Click "New Form"
   - Name it "Contact Form"
   - Copy the form ID (looks like `xabc123def`)

2. **Newsletter Form**:
   - Click "New Form" again
   - Name it "Newsletter"
   - Copy the form ID

### Step 3: Update Your Code

Replace the placeholder form IDs in these files:

**File: `src/pages/api/contact.ts`**

```typescript
// Line ~45: Replace YOUR_FORMSPREE_FORM_ID with your contact form ID
const formspreeResponse = await fetch("https://formspree.io/f/YOUR_ACTUAL_CONTACT_FORM_ID", {
```

**File: `src/pages/api/newsletter.ts`**

```typescript
// Line ~25: Replace YOUR_FORMSPREE_FORM_ID with your newsletter form ID
const formspreeResponse = await fetch("https://formspree.io/f/YOUR_ACTUAL_NEWSLETTER_FORM_ID", {
```

### Step 4: Test

1. Restart your dev server: `npm run dev`
2. Go to `/contact`
3. Test both forms
4. Check your email for the messages

## Alternative: Use a Different Email Service

If you prefer not to use Formspree, I can help you set up:

- **Resend** (recommended for production)
- **EmailJS** (client-side)
- **SendGrid** (enterprise)

## What the White Boxes Mean

- **"Failed to subscribe"** = Newsletter form couldn't send to Formspree
- **"Failed to send message"** = Contact form couldn't send to Formspree
- **"Please try again or email directly"** = Fallback message when forms fail

Once you update the Formspree form IDs, these error messages will disappear and you'll see success messages instead!
