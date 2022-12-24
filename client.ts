import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
import { contentType } from "https://deno.land/std@0.165.0/media_types/mod.ts";
import { hash, verify } from "https://deno.land/x/argon2@v0.9.2/lib/mod.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const _route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return "/" }};
  const path = url.pathname;
  const file = (fp:string) => { return Deno.readFile(fp) }
  const _file_extension = url.pathname.split("/")[url.pathname.split("/").length - 1].split(".")[1];
  const params = new URLSearchParams(url.searchParams);

  if(path === "/") {
    return new Response(await file("./client/index.html"), { headers: { "content-type": contentType("html") } });
  }

  else if(path === "/auth") {
    const code = params.get("code");
    const auth = await fetch("https://indieauth.com/auth", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }, body: JSON.stringify({ "code": code, "redirect_uri": "https://client.jordanreger.com/auth", "client_id": "https://client.jordanreger.com" }) })
      .then(res => res.json())
    
    localStorage.setItem("domain", auth.me);
    
    return new Response(auth, { headers: { "content-type": contentType("txt") } });
  }

  else if(path === "/app") {
    if(localStorage.getItem("domain") === "https://jordanreger.com") {
      return new Response(await file("./client/app.html"), { headers: { "content-type": contentType("html") } });
    } else {
      return Response.redirect("/", 302);
    }
  }

  else {
    return new Response("404", { headers: { "content-type": "text/plain" } });
  }
}

await serve(handler);