# Junkerri Astro Template

A modern, performant website template built with **Astro**, **React**, **Tailwind CSS v4**, and **shadcn/ui**. Perfect for portfolios, blogs, and business websites.

![Astro](https://img.shields.io/badge/Astro-5.12.8-000000?style=for-the-badge&logo=astro)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)

## ✨ Features

- **🚀 Performance**: 100/100 Lighthouse score
- **📱 Responsive**: Mobile-first design approach
- **🎨 Modern UI**: shadcn/ui components with Tailwind CSS v4
- **📝 Content**: Blog system with MDX support
- **🔍 SEO**: Comprehensive SEO optimization
- **📊 Analytics**: Google Tag Manager integration
- **💳 E-commerce**: Stripe integration ready
- **🎭 Dark Mode**: Built-in theme switching
- **📡 RSS**: Automatic RSS feed generation
- **🗺️ Sitemap**: SEO-friendly sitemap

## 🚀 Quick Start

### Option 1: Use as Template (Recommended)

```bash
# Clone this repository
git clone https://github.com/yourusername/junkerri-astro-template.git my-website
cd my-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Create New Project

```bash
# Create new Astro project
npm create astro@latest my-website -- --template minimal

# Copy template files and follow setup guide below
```

## 🛠️ Setup Guide

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
# Copy environment template
cp env.example .env

# Update with your values
GTM_CONTAINER_ID=GTM-XXXXXXX
```

### 3. Customize Content

- **Site Info**: Update `src/consts.ts`
- **SEO**: Modify `src/components/SEO.astro`
- **Content**: Replace content in `src/content/`
- **Assets**: Replace images in `src/assets/`

### 4. Start Development

```bash
npm run dev
```

## 🎨 Customization

### Colors & Theming

The template uses a semantic color system with Tailwind CSS v4. Colors are defined in `src/styles/global.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    /* ... more colors */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode colors */
  }
}
```

### Components

All UI components are in `src/components/ui/` using shadcn/ui:

```tsx
import { Button } from "@/components/ui/button";

<Button variant="outline" size="lg">
  Click me
</Button>;
```

### Layouts

- **BaseLayout.astro**: Main layout wrapper
- **BlogPost.astro**: Blog post layout
- **SEO.astro**: SEO component for meta tags

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── Header.astro    # Site header
│   ├── Footer.astro    # Site footer
│   └── SEO.astro       # SEO component
├── content/             # Content collections
│   └── blog/           # Blog posts (MDX)
├── layouts/             # Page layouts
├── pages/               # Route pages
├── styles/              # Global styles
└── types/               # TypeScript types
```

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

```javascript
export default defineConfig({
  integrations: [react(), mdx(), sitemap(), rss()],
  output: "static",
});
```

### Tailwind CSS v4

No `tailwind.config.js` needed! Uses CSS-only configuration in `src/styles/global.css`:

```css
@import "tailwindcss";

@layer base {
  :root {
    --color-primary: hsl(var(--primary));
    --color-background: hsl(var(--background));
    /* ... */
  }
}
```

### TypeScript

Full TypeScript support with strict configuration in `tsconfig.json`.

## 📱 Pages & Routes

- **Home**: `/` - Landing page with hero section
- **About**: `/about` - About page
- **Blog**: `/blog` - Blog listing and posts
- **Portfolio**: `/art`, `/music`, `/web-projects` - Portfolio sections
- **Shop**: `/shop` - E-commerce (Stripe integration)
- **Contact**: `/contact` - Contact form

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Deploy dist/ folder
```

### Static Hosting

```bash
npm run build
# Upload dist/ folder to any static host
```

## 🔌 Integrations

### Google Tag Manager

```bash
# Set environment variable
GTM_CONTAINER_ID=GTM-XXXXXXX
```

### Stripe (E-commerce)

```bash
# Configure in src/lib/stripe.ts
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Forms

- **Contact Form**: Formspree integration
- **Newsletter**: Email subscription system

## 📚 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 🎯 Performance Features

- **Static Generation**: Pre-built HTML for fast loading
- **Partial Hydration**: React components only hydrate when needed
- **Image Optimization**: Sharp integration for optimized images
- **CSS Purging**: Unused CSS automatically removed
- **Lazy Loading**: Components load when visible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Astro**: [astro.build](https://astro.build)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Radix UI**: [radix-ui.com](https://radix-ui.com)

## 🆘 Support

- **Documentation**: [docs.astro.build](https://docs.astro.build)
- **Discord**: [astro.build/chat](https://astro.build/chat)
- **Issues**: [GitHub Issues](https://github.com/yourusername/junkerri-astro-template/issues)

---

**Made with ❤️ using Astro**
