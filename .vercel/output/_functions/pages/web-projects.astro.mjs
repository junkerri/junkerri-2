import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderScript } from '../chunks/astro/server_C7Z8jh5L.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_BMShtRPO.mjs';
import { $ as $$Hero } from '../chunks/Hero_EX2kpzgx.mjs';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BnG_e6nR.mjs';
export { renderers } from '../renderers.mjs';

const pulseCoop = new Proxy({"src":"/_astro/pulse-coop.BJSYu3Tk.jpg","width":3024,"height":1499,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/photos/pulse-coop.jpg";
							}
							
							return target[name];
						}
					});

const beatkerri = new Proxy({"src":"/_astro/beatkerri.CXKltpnC.jpg","width":3024,"height":1570,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/photos/beatkerri.jpg";
							}
							
							return target[name];
						}
					});

const personalWebsitePortfolio = new Proxy({"src":"/_astro/personal-website-portfolio.D1LNrEsk.jpg","width":3008,"height":1541,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/aasthakarki/Code/junkerri-astro/src/assets/photos/personal-website-portfolio.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://junkerri.com");
const $$WebProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WebProjects;
  const projects = [
    {
      id: 1,
      title: "Pulse COOP",
      description: "A worker-owned tech cooperative website for creatives, musicians, and web technologists based in Austin, TX. Features democratic decision-making, community empowerment, and sustainable practices.",
      tech: ["Astro", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      image: pulseCoop,
      liveUrl: "https://pulse.coop",
      githubUrl: "https://github.com/junkerri/pulse-coop",
      category: "Business Web App",
      featured: true
    },
    {
      id: 2,
      title: "Beatkerri",
      description: "A 16-step digital sequencer and beat-making web application that doubles as a daily puzzle web app game. Features challenge mode, jam mode, and daily beat challenges with an intuitive interface. Users can create, share, and download their beats as WAV and MIDI files. Built with Tone.js for high-quality audio synthesis and Web Audio API for real-time processing.",
      tech: ["TypeScript", "React", "Tone.js", "Web Audio API", "Canvas API", "Vercel"],
      image: beatkerri,
      liveUrl: "https://www.beatkerri.com/",
      githubUrl: "https://github.com/junkerri/beatkerri",
      category: "Creative Web App"
    },
    {
      id: 3,
      title: "Junkerri Portfolio",
      description: "A comprehensive multidisciplinary artist and musician portfolio website built with Astro, featuring music releases, art gallery, web projects, and creative work. Includes dark cyberpunk aesthetic, cosmic animations, responsive design, content collections for blog posts, Stripe integration for the shop, contact forms, and a fully functional e-commerce experience.",
      tech: ["Astro", "React", "Tailwind CSS", "TypeScript", "Stripe", "Vercel"],
      image: personalWebsitePortfolio,
      liveUrl: "https://junkerri-2.vercel.app/",
      githubUrl: "https://github.com/junkerri/junkerri-2",
      category: "Personal Portfolio"
    }
  ];
  const categories = ["All", "Creative Web App", "Business Web App", "Personal Portfolio"];
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Web Projects - Junkerri", "description": "Interactive web projects and creative coding experiments" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="web-projects-page min-h-screen"> ${renderComponent($$result2, "Hero", $$Hero, { "title": ["WEB", "PROJECTS"], "minHeight": 300 })} <!-- Project Categories --> <section class="py-8"> <div class="container"> <div class="flex flex-wrap gap-4 justify-center"> ${categories.map((category) => renderTemplate`<button class="category-filter px-6 py-2 rounded-full border border-input bg-background text-foreground text-sm font-medium transition-colors hover:!bg-primary hover:!text-black hover:!border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"${addAttribute(category, "data-category")}> ${category} </button>`)} </div> </div> </section> <!-- Projects Grid --> <section class="py-16"> <div class="container"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`<div class="card group"${addAttribute(project.category, "data-category")}> <div class="aspect-video overflow-hidden rounded-t-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": project.image, "alt": project.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", "width": 400, "height": 225 })} </div> <div class="card-content"> <div class="flex items-center justify-between mb-2"> <span class="badge badge-outline"> ${project.category} </span> </div> <h3 class="text-xl font-semibold mb-2">${project.title}</h3> <p class="text-muted-foreground mb-4">${project.description}</p> <div class="flex flex-wrap gap-2 mb-4"> ${project.tech.map((tech) => renderTemplate`<span class="badge badge-secondary"> ${tech} </span>`)} </div> <div class="flex gap-2"> <a${addAttribute(project.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
Live Demo
</a> <a${addAttribute(project.githubUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
GitHub
</a> </div> </div> </div>`)} </div> </div> </section> <!-- Featured Project --> <section class="py-16 bg-muted/30"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mb-4">Featured Project</h2> <p class="text-muted-foreground max-w-2xl mx-auto">Latest collaborative work</p> </div> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="space-y-6"> <div> <span class="badge badge-outline mb-3"> ${featuredProject.category} </span> <h3 class="text-3xl font-bold mb-4">${featuredProject.title}</h3> <p class="text-lg text-muted-foreground mb-6">${featuredProject.description}</p> </div> <div class="flex flex-wrap gap-2 mb-6"> ${featuredProject.tech.map((tech) => renderTemplate`<span class="badge badge-secondary"> ${tech} </span>`)} </div> <div class="flex gap-4"> <a${addAttribute(featuredProject.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
Visit Site
</a> <a${addAttribute(featuredProject.githubUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
View Code
</a> </div> </div> <div class="aspect-video overflow-hidden rounded-2xl bg-muted"> ${renderComponent($$result2, "Image", $$Image, { "src": featuredProject.image, "alt": featuredProject.title, "class": "w-full h-full object-cover", "width": 600, "height": 338 })} </div> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-16 bg-primary text-primary-foreground"> <div class="container text-center"> <h2 class="text-3xl font-bold mb-4">Interested in Collaboration?</h2> <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
Let's create something amazing together
</p> <a href="/contact" class="btn btn-secondary btn-lg">
Get in Touch
</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderScript($$result2, "/Users/aasthakarki/Code/junkerri-astro/src/pages/web-projects.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/pages/web-projects.astro", void 0);

const $$file = "/Users/aasthakarki/Code/junkerri-astro/src/pages/web-projects.astro";
const $$url = "/web-projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$WebProjects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
