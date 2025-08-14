// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://junkerri.com",
  output: "server", // Server mode required for API routes to work
  adapter: vercel({
    // Vercel configuration
    webAnalytics: {
      enabled: false,
    },
  }),
  integrations: [mdx(), sitemap(), react()],

  env: {
    schema: {
      STRIPE_PUBLIC_KEY: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      STRIPE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
        default: "",
      }),
      GTM_CONTAINER_ID: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      SITE: envField.string({
        context: "server",
        access: "public",
        default: process.env.VERCEL_PROJECT_PRODUCTION_URL
          ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` // Production deployment
          : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}` // Preview/branch deployment
          : "https://junkerri.com", // Local development fallback
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
