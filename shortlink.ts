import { serve } from "https://deno.land/std@0.162.0/http/server.ts";

function handler(req: Request): Response {
  const url = new URL(req.url);
  const route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return "/" }};
  const path = url.pathname;

  if(path === "/") {
    return Response.redirect("https://jordanreger.com", 302);
  } else if(path === route("/p/*")) {
    const post_number = route("/p/*")?.split("/")[2];
    if(post_number){
      return Response.redirect(`https://jordanreger.com/posts.html#${post_number}`, 302);
    } else {
      return Response.redirect("https://jordanreger.com/posts.html", 302);
    }
  } else if(path === route("/post/*")) {
    const post_number = route("/post/*")?.split("/")[2];
    if(post_number){
      return Response.redirect(`https://jordanreger.com/posts.html#${post_number}`, 302);
    } else {
      return Response.redirect("https://jordanreger.com/posts.html", 302);
    }
  } else if(path === "$") {
    return Response.redirect("https://cash.app/$jxreger", 302);
  } else {
    return Response.redirect(`https://jordanreger.com${path}.html`, 302);
  }
}

await serve(handler);
