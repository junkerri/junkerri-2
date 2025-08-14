# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🎨 Color Palette: "Cyberpunk--"

This project now features the **"Cyberpunk--"** color palette from [Color Hex](https://www.color-hex.com/color-palette/1046370), creating a vibrant, neon cyberpunk aesthetic.

### Color Palette

| Color       | Hex       | RGB         | Usage                       |
| ----------- | --------- | ----------- | --------------------------- |
| Bright Cyan | `#00ffb1` | (0,255,177) | Primary actions, highlights |
| Neon Pink   | `#e500ff` | (229,0,255) | Secondary elements, accents |
| Deep Purple | `#5e00ff` | (94,0,255)  | Muted elements, backgrounds |
| Dark Purple | `#2f006f` | (47,0,111)  | Text, headings              |
| Pure Black  | `#000000` | (0,0,0)     | Dark mode backgrounds       |

### Available Utility Classes

#### Background Colors

- `.bg-cyberpunk-cyan` - Bright cyan background
- `.bg-cyberpunk-pink` - Neon pink background
- `.bg-cyberpunk-purple` - Deep purple background
- `.bg-cyberpunk-dark-purple` - Dark purple background
- `.bg-cyberpunk-black` - Pure black background

#### Text Colors

- `.text-cyberpunk-cyan` - Bright cyan text
- `.text-cyberpunk-pink` - Neon pink text
- `.text-cyberpunk-purple` - Deep purple text
- `.text-cyberpunk-dark-purple` - Dark purple text
- `.text-cyberpunk-black` - Pure black text

#### Border Colors

- `.border-cyberpunk-cyan` - Bright cyan border
- `.border-cyberpunk-pink` - Neon pink border
- `.border-cyberpunk-purple` - Deep purple border
- `.border-cyberpunk-dark-purple` - Dark purple border
- `.border-cyberpunk-black` - Pure black border

#### Gradients

- `.bg-gradient-cyberpunk` - Full cyberpunk gradient
- `.bg-gradient-cyberpunk-reverse` - Reverse cyberpunk gradient
- `.bg-gradient-cyberpunk-vertical` - Vertical cyberpunk gradient

#### Glow Effects

- `.glow-cyberpunk-cyan` - Cyan glow effect
- `.glow-cyberpunk-pink` - Pink glow effect
- `.glow-cyberpunk-purple` - Purple glow effect

### Usage Examples

```html
<!-- Hero section with cyberpunk gradient -->
<section class="bg-gradient-cyberpunk">
  <h1 class="text-cyberpunk-cyan">Title</h1>
</section>

<!-- Card with cyberpunk colors -->
<div class="card bg-cyberpunk-dark-purple/10 border-cyberpunk-pink">
  <h3 class="text-cyberpunk-cyan">Card Title</h3>
  <p class="text-cyberpunk-pink/70">Card content</p>
</div>

<!-- Button with cyberpunk styling -->
<button
  class="btn bg-cyberpunk-cyan hover:bg-cyberpunk-pink glow-cyberpunk-cyan"
>
  Click me
</button>
```

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Google Tag Manager integration

## 🔧 Google Tag Manager Setup

This project includes Google Tag Manager (GTM) integration for analytics and marketing tracking.

### Quick Setup

1. **Get your GTM Container ID** from [Google Tag Manager](https://tagmanager.google.com/)
2. **Set environment variable** in your `.env` file:
   ```bash
   GTM_CONTAINER_ID=GTM-XXXXXXX
   ```
3. **Deploy** - GTM will automatically load on all pages

### Environment Variables

Copy `env.example` to `.env` and update:

```bash
cp env.example .env
```

Required:

- `GTM_CONTAINER_ID` - Your GTM container ID (format: GTM-XXXXXXX)

### How It Works

- GTM script loads in the `<head>` section via `BaseHead.astro`
- Automatically includes both JavaScript and noscript fallback
- Only renders when `GTM_CONTAINER_ID` is provided
- Follows latest GTM documentation and best practices

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
