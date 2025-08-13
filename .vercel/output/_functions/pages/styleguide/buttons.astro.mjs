import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C7Z8jh5L.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_BMShtRPO.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

const $$Buttons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Buttons \u2013 Styleguide" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container py-12 space-y-12"> <section class="space-y-6"> <h1 class="text-3xl font-bold">Buttons</h1> <p class="text-muted-foreground">Shadcn/ui React \`Button\` variants (authoritative) and legacy patterns currently used. Prefer shadcn variants to stay DRY.</p> </section> <section class="space-y-4"> <h2 class="text-xl font-semibold">shadcn Button – Variants</h2> <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "default", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Default` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "secondary", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Secondary` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "outline", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Outline` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "ghost", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Ghost` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "asChild": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate` <a href="#">Link (asChild)</a> ` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "destructive", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Destructive` })} </div> </section> <section class="space-y-4"> <h2 class="text-xl font-semibold">shadcn Button – Sizes</h2> <div class="flex flex-wrap items-center gap-4"> ${renderComponent($$result2, "Button", Button, { "client:load": true, "size": "sm", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Small` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Default` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "size": "lg", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Large` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "size": "icon", "aria-label": "Icon button", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`★` })} </div> </section> <section class="space-y-4"> <h2 class="text-xl font-semibold">shadcn Button – States</h2> <div class="flex flex-wrap items-center gap-4"> ${renderComponent($$result2, "Button", Button, { "client:load": true, "disabled": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`Disabled` })} ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "outline", "disabled": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`
Disabled (Outline)
` })} </div> </section> <section class="space-y-4"> <h2 class="text-xl font-semibold">Legacy \`.btn\` CSS Utilities (to migrate)</h2> <div class="flex flex-wrap items-center gap-4"> <button class="btn btn-primary btn-sm">.btn .btn-primary .btn-sm</button> <button class="btn btn-primary">.btn .btn-primary</button> <button class="btn btn-primary btn-lg">.btn .btn-primary .btn-lg</button> </div> <div class="flex flex-wrap items-center gap-4"> <button class="btn btn-secondary btn-sm">.btn .btn-secondary .btn-sm</button> <button class="btn btn-secondary">.btn .btn-secondary</button> <button class="btn btn-secondary btn-lg">.btn .btn-secondary .btn-lg</button> </div> <div class="flex flex-wrap items-center gap-4"> <button class="btn btn-outline btn-sm">.btn .btn-outline .btn-sm</button> <button class="btn btn-outline">.btn .btn-outline</button> <button class="btn btn-outline btn-lg">.btn .btn-outline .btn-lg</button> </div> <p class="text-sm text-muted-foreground">Map to: primary → variant="default", secondary → variant="secondary", outline → variant="outline"; sizes map to size="sm|default|lg".</p> </section> <section class="space-y-4"> <h2 class="text-xl font-semibold">Raw Tailwind Button Patterns (to standardize)</h2> <div class="grid gap-4 md:grid-cols-2"> <a href="#" class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
CTA (bg-primary)
</a> <button class="px-6 py-2 rounded-full border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
Filter (rounded-full)
</button> </div> <p class="text-sm text-muted-foreground">Prefer replacing with \`Button\` variants or a thin wrapper using \`buttonVariants()\` for anchors.</p> </section> <section class="space-y-2"> <h2 class="text-xl font-semibold">Anchors styled via shadcn</h2> <p class="text-sm text-muted-foreground">Use \`asChild\` to keep semantic \`<a>\` while reusing button styles.</a></p><a></a><div><a> ${renderComponent($$result2, "Button", Button, { "client:load": true, "asChild": true, "variant": "outline", "client:component-hydration": "load", "client:component-path": "@/components/ui/button", "client:component-export": "Button" })}</a><a href="/contact">Contact Link (as Button)</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/pages/styleguide/buttons.astro", void 0);

const $$file = "/Users/aasthakarki/Code/junkerri-astro/src/pages/styleguide/buttons.astro";
const $$url = "/styleguide/buttons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Buttons,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
