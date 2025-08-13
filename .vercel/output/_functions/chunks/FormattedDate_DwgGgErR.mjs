import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_C7Z8jh5L.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://junkerri.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const parsedDate = date ? new Date(date) : null;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(parsedDate ? parsedDate.toISOString() : void 0, "datetime")}> ${parsedDate ? parsedDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "\u2014"} </time>`;
}, "/Users/aasthakarki/Code/junkerri-astro/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
