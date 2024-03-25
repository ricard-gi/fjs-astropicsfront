/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import { c as config, $ as $$Picture, a as $$Layout } from './_hashtag__lNSohi4M.mjs';

const $$Astro = createAstro();
const $$user = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$user;
  const { user } = Astro2.params;
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/login");
  }
  let token = Astro2.cookies.get("token").value;
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  };
  let images = [];
  try {
    let x = await fetch(
      `${config.API_URL}/images/user/${user}`,
      options
    );
    images = await x.json();
  } catch (err) {
    throw err;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "images from user " + user }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid"> ${images.map((e) => renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "pic": e })}`)} </div> ` })}`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/user/[user].astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/user/[user].astro";
const $$url = "/user/[user]";

export { $$user as default, $$file as file, $$url as url };
