/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import { c as config, $ as $$Picture, a as $$Layout } from './_hashtag__lNSohi4M.mjs';

const $$Astro = createAstro();
const $$Mypics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mypics;
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/login");
  }
  let token = Astro2.cookies.get("token").value;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  let images;
  let err = "";
  images = await fetch(`${config.API_URL}/images`, options);
  images = await images.json();
  if (images.error) {
    err = images.error;
    images = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "imatges meves..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid"> ${images.map((e) => renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "pic": e })}`)} </div> <h1 class="text-red-700">${err}</h1> ` })}`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/mypics.astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/mypics.astro";
const $$url = "/mypics";

export { $$Mypics as default, $$file as file, $$url as url };
