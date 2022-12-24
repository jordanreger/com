import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
import { contentType } from "https://deno.land/std@0.165.0/media_types/mod.ts";
import { hash, verify } from "https://deno.land/x/argon2@v0.9.2/lib/mod.ts";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const _route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return "/" }};
  const path = url.pathname;
  const file = (fp:string) => { return Deno.readFile(fp) }
  const _file_extension = url.pathname.split("/")[url.pathname.split("/").length - 1].split(".")[1];
  const _params = new URLSearchParams(url.searchParams);

  if(path === "/") {
    return new Response(await file("./client/index.html"), { headers: { "content-type": contentType("html") } });
  }

  else if(path === "/app") {
    return new Response(await file("./client/app.html"), { headers: { "content-type": contentType("html") } });
  }

  else {
    return new Response("404", { headers: { "content-type": "text/plain" } });
  }
}

await serve(handler);