/* empty css                              */
import { c as createAstro, d as createComponent } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("token");
  return Astro2.redirect("/login");
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/logout.astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
