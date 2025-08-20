# Contact Form & Newsletter Setup Guide

Your website now has fully functional contact forms and newsletter subscription! Here's what's been implemented and how to configure it.

## ✅ What's Already Working

### Contact Form

- **Location**: `/contact` page
- **Features**:
  - Form validation with error messages
  - Loading states during submission
  - Success/error feedback
  - Sends emails to `junkerriart@gmail.com`

### Newsletter Subscription

- **Location**: `/contact` page (top section)
- **Features**:
  - Email validation
  - Loading states
  - Success/error feedback
  - Stores subscriptions via Formspree

## 🔧 Current Configuration

Both forms are currently using **Formspree** as the email service, which is already configured in your API routes:

- **Contact Form**: `/api/contact.ts`
- **Newsletter**: `/api/newsletter.ts`

## 📧 Email Service Options

### Option 1: Keep Formspree (Current Setup)

**Pros**: Free tier available, easy setup, no additional configuration needed
**Cons**: Limited features on free tier

**Setup**: Already configured! Just make sure your Formspree form is active.

### Option 2: Resend (Recommended for Production)

**Pros**: Professional email service, better deliverability, more features
**Cons**: Requires API key setup

**Setup**:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. Install Resend: `npm install resend`
5. Update API routes to use Resend instead of Formspree

### Option 3: EmailJS

**Pros**: Client-side email sending, no server setup needed
**Cons**: Less secure, API keys exposed to client

### Option 4: SendGrid

**Pros**: Enterprise-grade email service
**Cons**: More complex setup, paid service

## 🚀 Testing Your Forms

1. **Start your development server**:

   ```bash
   npm run dev
   ```

2. **Test the contact form**:

   - Go to `/contact`
   - Fill out the form with test data
   - Submit and check for success message
   - Check your email (`junkerriart@gmail.com`) for the message

3. **Test the newsletter subscription**:
   - Go to `/contact`
   - Enter an email in the newsletter form
   - Submit and check for success message
   - Check your email for the subscription notification

## 🔍 Troubleshooting

### Form Not Sending Emails

1. Check your Formspree dashboard to ensure the form is active
2. Verify the form ID in the API routes matches your Formspree form
3. Check browser console for any JavaScript errors

### Validation Errors

- The forms use Zod validation with clear error messages
- All fields are required and properly validated
- Email format is validated

### Styling Issues

- Forms use shadcn/ui components with Tailwind CSS
- Ensure your `global.css` includes the necessary Tailwind imports
- Check that all UI components are properly installed

## 📝 Customization

### Adding New Form Fields

1. Update the Zod schema in the API route
2. Update the React component form
3. Update the email template in the API route

### Changing Email Templates

Edit the `emailData.html` section in `/api/contact.ts` to customize the email format.

### Adding Form Analytics

Consider adding Google Analytics or similar to track form submissions.

## 🔒 Security Considerations

- Form validation happens on both client and server side
- API routes are protected against common attacks
- Email addresses are validated before processing
- Consider adding rate limiting for production use

## 📞 Support

If you need help with:

- Setting up a different email service
- Customizing form fields
- Adding additional features
- Troubleshooting issues

The forms are built with modern React patterns and should be easy to extend and maintain.
