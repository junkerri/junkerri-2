import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderScript, d as addAttribute } from '../chunks/astro/server_C7Z8jh5L.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BTs-7o_a.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_BMShtRPO.mjs';
import { $ as $$Hero } from '../chunks/Hero_EX2kpzgx.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_DwgGgErR.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_B4xs4184.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const categories = ["all", "essay", "short-story", "poem", "article", "review", "thoughts"];
  const categoryLabels = {
    "all": "All Posts",
    "essay": "Essays",
    "short-story": "Short Stories",
    "poem": "Poems",
    "article": "Articles",
    "review": "Reviews",
    "thoughts": "Thoughts"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main class="blog-page min-h-screen" data-astro-cid-5tznm7mj> <!-- Hero Section with Cosmic Animations --> ${renderComponent($$result2, "Hero", $$Hero, { "title": "BLOG", "subtitle": "Thoughts, stories, and creative explorations across various forms of expression.", "minHeight": 300, "data-astro-cid-5tznm7mj": true })} <!-- Blog Content Section --> <section class="py-16" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <!-- Category Filter --> <div class="mb-12 text-center" data-astro-cid-5tznm7mj> <div class="flex flex-wrap justify-center gap-4" id="category-filter" data-astro-cid-5tznm7mj> ${categories.map((category) => renderTemplate`<button class="category-filter px-6 py-2 rounded-full border border-input bg-background text-foreground text-sm font-medium transition-colors hover:!bg-primary hover:!text-black hover:!border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[active=true]:bg-primary data-[active=true]:!text-black data-[active=true]:border-transparent"${addAttribute(category, "data-category")} data-astro-cid-5tznm7mj> ${categoryLabels[category]} </button>`)} </div> </div> <!-- Blog Posts Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog-posts" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li class="card group hover:shadow-lg transition-all duration-300"${addAttribute(post.data.category, "data-category")} data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} class="block" data-astro-cid-5tznm7mj> <div class="p-6" data-astro-cid-5tznm7mj> <div class="flex items-center justify-between mb-3" data-astro-cid-5tznm7mj> <span class="category-badge px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-cyberpunk-cyan/10 text-cyberpunk-cyan border border-cyberpunk-cyan/20" data-astro-cid-5tznm7mj> ${post.data.category} </span> <p class="date text-sm text-muted-foreground" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </div> <h4 class="title text-xl font-semibold mb-2" data-astro-cid-5tznm7mj>${post.data.title}</h4> ${post.data.description && renderTemplate`<p class="text-muted-foreground line-clamp-3" data-astro-cid-5tznm7mj>${post.data.description}</p>`} </div> </a> </li>`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ${renderScript($$result2, "/Users/aasthakarki/Code/junkerri-astro/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/pages/blog/index.astro", void 0);

const $$file = "/Users/aasthakarki/Code/junkerri-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
