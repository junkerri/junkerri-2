# 🚀 Template Setup Guide

This guide will help you quickly customize this Astro template for your own website.

## 📋 Quick Start Checklist

- [ ] Clone/copy the template
- [ ] Update site information
- [ ] Replace content and assets
- [ ] Configure environment variables
- [ ] Deploy your site

## 🎯 Step-by-Step Customization

### 1. Site Information

Update `src/consts.ts` with your site details:

```typescript
export const SITE = {
  name: "Your Site Name",
  title: "Your Site Title",
  description: "Your site description",
  url: "https://yoursite.com",
  ogImage: "https://yoursite.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
  },
};
```

### 2. SEO Configuration

Modify `src/components/SEO.astro` for your brand:

```astro
---
// Update default values
const defaultTitle = "Your Site Name";
const defaultDescription = "Your site description";
const defaultImage = "/og-image.jpg";
---
```

### 3. Content Replacement

#### Blog Posts

- Replace content in `src/content/blog/`
- Update frontmatter in each `.md` file
- Add your own blog images to `src/assets/blog-images/`

#### Portfolio Items

- Update `src/pages/art.astro`, `src/pages/music.astro`, `src/pages/web-projects.astro`
- Replace images in respective asset folders
- Update descriptions and links

#### About Page

- Edit `src/pages/about.astro` with your information
- Replace profile photo in `src/assets/photos/`

### 4. Assets & Images

#### Logo & Branding

- Replace `public/favicon.png`
- Update `public/site.webmanifest`
- Add your logo to `src/assets/`

#### Photos & Images

- **Portfolio**: Replace images in `src/assets/album-art/`, `src/assets/illustrations/`
- **Blog**: Update `src/assets/blog-images/`
- **Profile**: Replace `src/assets/photos/artist-photo.jpg`

### 5. Environment Configuration

Copy and configure your environment:

```bash
cp env.example .env
```

Update `.env` with your values:

```bash
# Google Tag Manager (optional)
GTM_CONTAINER_ID=GTM-XXXXXXX

# Stripe (if using e-commerce)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 6. Navigation & Links

Update navigation in `src/components/Header.astro`:

```astro
---
// Update navigation items
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
---
```

### 7. Footer Links

Update `src/components/Footer.astro`:

```astro
---
// Update social links and copyright
const socialLinks = [
  { href: "https://twitter.com/yourusername", label: "Twitter" },
  { href: "https://github.com/yourusername", label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
];
---
```

## 🎨 Design Customization

### Color Scheme

The template uses semantic colors. Update `src/styles/global.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    /* Add your custom colors here */
  }
}
```

### Typography

Update fonts in `src/styles/global.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap");

@layer base {
  :root {
    --font-sans: "Your Font", system-ui, sans-serif;
  }
}
```

### Component Styling

Customize shadcn/ui components in `src/components/ui/`:

```tsx
// Example: Custom button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        // Add your custom variants
        custom: "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
      },
      // ... rest of variants
    },
  }
);
```

## 🔌 Feature Configuration

### Blog System

Enable/disable blog features in `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [
    // Comment out to disable blog
    mdx(),
    rss(),
    sitemap(),
  ],
});
```

### E-commerce

Configure Stripe in `src/lib/stripe.ts`:

```typescript
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});
```

### Analytics

Google Tag Manager is automatically included when `GTM_CONTAINER_ID` is set.

## 🚀 Deployment

### Build Your Site

```bash
npm run build
```

### Deploy Options

#### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

#### Netlify

```bash
# Drag and drop dist/ folder to Netlify
# Or use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages

```bash
# Push to GitHub and enable Pages in repository settings
# Set source to GitHub Actions
```

## 🧹 Cleanup Tasks

After customization, remove template-specific content:

- [ ] Delete template blog posts
- [ ] Remove template images
- [ ] Update meta descriptions
- [ ] Replace placeholder text
- [ ] Update copyright notices

## 🔍 Testing Checklist

Before deploying:

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Links work as expected
- [ ] Forms submit successfully
- [ ] Mobile responsiveness
- [ ] SEO meta tags are correct
- [ ] Performance score (Lighthouse)

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vercel Deployment](https://vercel.com/docs)

---

**Need help?** Check the main README.md or open an issue on GitHub!
