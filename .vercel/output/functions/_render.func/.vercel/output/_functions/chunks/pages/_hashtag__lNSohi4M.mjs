/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, m as maybeRenderHead, g as addAttribute, h as renderComponent, u as unescapeHTML, F as Fragment } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <h1 class="text-center text-red-500 p-2 mb-4 text-4xl border border-red-500 rounded-lg" data-astro-cid-sckkx6r4> ${title} </h1> <a href="/" data-astro-cid-sckkx6r4>Inici</a> <a href="/upload" data-astro-cid-sckkx6r4>Afegir foto</a> <a href="/mypics" data-astro-cid-sckkx6r4>My fotos</a> <a href="/logout" data-astro-cid-sckkx6r4>Logout</a> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/layouts/Layout.astro", void 0);

const config = {
    //API_URL: `http://${IP}:3000/api`,
    //IMG_URL: `http://${IP}:3000/img`,
    API_URL: `http://api.ricardhernandez.com/api`,
    IMG_URL: `http://api.ricardhernandez.com/img`,

};

const $$Astro$1 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const { pic } = Astro2.props;
  const { image, userName, hashtags, userId } = pic;
  function replaceHashtagsWithLinks(text) {
    return text.replace(/#(\w+)/g, '<a href="/hashtag/$1">#$1</a>');
  }
  return renderTemplate`${maybeRenderHead()}<div class=" p-2 border border-red-500 rounded-lg"> <img${addAttribute(`${config.IMG_URL}/${image}`, "src")}${addAttribute(image, "alt")} width="400px"> <h1 class="text-center  bg-red-500 text-white">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(replaceHashtagsWithLinks(hashtags))}` })}</h1> <h2 class="text-center  bg-blue-500 text-white"><a${addAttribute("/user/" + userName, "href")}>${userName}</a></h2> </div>`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/components/Picture.astro", void 0);

const $$Astro = createAstro();
const $$hashtag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$hashtag;
  const { hashtag } = Astro2.params;
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/login");
  }
  let token = Astro2.cookies.get("token").value;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  let images = [];
  try {
    let x = await fetch(`${config.API_URL}/images/hashtag/${hashtag}`, options);
    images = await x.json();
  } catch (err) {
    throw err;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "images for hashstag " + hashtag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid"> ${images.map((e) => renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "pic": e })}`)} </div> ` })}`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/hashtag/[hashtag].astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/hashtag/[hashtag].astro";
const $$url = "/hashtag/[hashtag]";

const _hashtag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$hashtag,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Picture as $, _hashtag_ as _, $$Layout as a, config as c };
