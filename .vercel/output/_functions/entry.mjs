import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CR4LL2M-.mjs';
import { manifest } from './manifest_DtuhlBBi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/stripe/checkout.astro.mjs');
const _page3 = () => import('./pages/api/stripe/products.astro.mjs');
const _page4 = () => import('./pages/art.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/music.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/shop.astro.mjs');
const _page11 = () => import('./pages/styleguide/buttons.astro.mjs');
const _page12 = () => import('./pages/unearthly-delights.astro.mjs');
const _page13 = () => import('./pages/web-projects.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/stripe/checkout.ts", _page2],
    ["src/pages/api/stripe/products.ts", _page3],
    ["src/pages/art.astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/blog/[...slug].astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/music.astro", _page8],
    ["src/pages/rss.xml.js", _page9],
    ["src/pages/shop.astro", _page10],
    ["src/pages/styleguide/buttons.astro", _page11],
    ["src/pages/unearthly-delights.astro", _page12],
    ["src/pages/web-projects.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "28722b93-5dd8-4dd6-96f8-cdb80b2b13f0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
