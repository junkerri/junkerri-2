import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot } from '../../chunks/astro/server_CuC082BX.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_tRXTBmwk.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DHcbWtSx.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_Dr_gzUQl.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_UtyXR1eF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://junkerri.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="blog-post-page min-h-screen"> <article> ${heroImage && renderTemplate`<div class="hero-image w-full max-w-6xl mx-auto px-4 py-8"> ${renderComponent($$result2, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": title, "class": "w-full h-auto rounded-lg shadow-lg" })} </div>`} <div class="prose max-w-4xl mx-auto px-4 py-8"> <div class="title text-center mb-8"> <div class="date text-sm text-muted-foreground mb-4"> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate && renderTemplate`<div class="last-updated-on text-sm text-muted-foreground">
Last updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} </div> <h1 class="text-4xl font-bold mb-4">${title}</h1> <hr class="border-border"> </div> ${renderSlot($$result2, $$slots["default"])} </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://junkerri.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/aasthakarki/Code/junkerri-astro/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
