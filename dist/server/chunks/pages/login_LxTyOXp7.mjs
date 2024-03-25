/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import { c as config, a as $$Layout } from './_hashtag__lNSohi4M.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  let err = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const nom = data.get("name");
    const pass = data.get("password");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: nom, password: pass })
    };
    let resposta = await fetch(`${config.API_URL}/login`, options);
    resposta = await resposta.json();
    if (resposta.error) {
      err = resposta.error;
    } else {
      const cookieOptions = { httpOnly: false, maxAge: 72e5 };
      Astro2.cookies.set("token", resposta.token, cookieOptions);
      return Astro2.redirect("/");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titol": "login..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post"> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
LOGIN
</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="name" type="text">NOM
</div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="password" type="password">PASS
</div> </div> <button type="submit">Enviar</button> <br> <p class="text-red-800">${err}</p> </form> ` })}`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/login.astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
