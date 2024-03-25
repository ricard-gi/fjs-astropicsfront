/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import { c as config, $ as $$Picture, a as $$Layout } from './_hashtag__lNSohi4M.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/login");
  }
  let x = await fetch(`${config.API_URL}/allimages`);
  const images = await x.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "all images" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid"> ${images.map((e) => renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "pic": e })}`)} </div> ` })}`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/index.astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
