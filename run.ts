import { serve } from "https://deno.land/std@0.162.0/http/server.ts";
import { contentType } from "https://deno.land/std@0.165.0/media_types/mod.ts";
let slash = "/";

if(Deno.build.os === "windows") {
  slash = "\\";
}

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = `build` + slash + url.pathname;
  const file = (fp:string) => { return Deno.readFile(fp) }
  
  try {
    const file_extension = url.pathname.split("/")[url.pathname.split("/").length - 1].split(".")[1];
    return new Response(await file(path), { headers: { "content-type": contentType(file_extension) } });
  } catch(_) {
    return new Response(await file(`build` + slash + `index.html`), { headers: { "content-type": "text/html" } });
  }
}

await serve(handler);