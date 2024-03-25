/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DfMCDFd4.mjs';
import 'kleur/colors';
import { c as config, a as $$Layout } from './_hashtag__lNSohi4M.mjs';

const $$Astro = createAstro();
const $$Upload = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Upload;
  let err = "";
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/login");
  }
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const comment = data.get("comentari");
    const image = data.get("imatge");
    let token = Astro2.cookies.get("token").value;
    const dataSend = new FormData();
    dataSend.append("hashtags", comment);
    dataSend.append("file", image);
    const options = {
      method: "POST",
      body: dataSend,
      headers: { Authorization: `Bearer ${token}` }
    };
    let x = await fetch(`${config.API_URL}/upload`, options);
    x = await x.json();
    console.log("x:", x);
    if (x.error) {
      err = x.error;
    } else {
      return Astro2.redirect("/mypics");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titol": "penja foto..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-md"> <form method="post" enctype="multipart/form-data" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="comentari">
comentari
</label> <input id="comentari" name="comentari" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Nom"> </div> <label for="formfile" class="form-label" for="formfile">foto</label> <input class="form-control" id="formfile" type="file" name="imatge" accept="image/*" capture="environment"> <div> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
Desar
</button> </div> </form> </div> <p class="text-red-500">${err}</p> ` })}`;
}, "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/upload.astro", void 0);

const $$file = "/Users/ricard/Code/JS2024/fjs-astropicsfront/src/pages/upload.astro";
const $$url = "/upload";

export { $$Upload as default, $$file as file, $$url as url };
