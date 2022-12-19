import { serve } from "https://deno.land/std@0.162.0/http/server.ts";

function handler(req: Request): Response {
  const url = new URL(req.url);
  const route = (route:string) => { const regexRoute = new RegExp(route, "gmi"); if(regexRoute.test(path)){ return path } else { return "/" }};
  const path = url.pathname;

  if(path === "/") {
    return Response.redirect("https://jordanreger.com", 302);
  }

  else if(path === route("/p/*")) {
    const post_number = route("/p/*")?.split("/")[2];
    if(post_number){
      return Response.redirect(`https://jordanreger.com/posts.html#${post_number}`, 302);
    } else {
      return Response.redirect("https://jordanreger.com/posts.html", 302);
    }
  }
  else if(path === route("/post/*")) {
    const post_number = route("/post/*")?.split("/")[2];
    if(post_number){
      return Response.redirect(`https://jordanreger.com/posts.html#${post_number}`, 302);
    } else {
      return Response.redirect("https://jordanreger.com/posts.html", 302);
    }
  }

  else if(path === "/$") {
    return Response.redirect("https://cash.app/$jxreger", 302);
  }

  else if(path === "/mail" || path === "/email") {
    return Response.redirect("mailto:mail@jordanreger.com", 302);
  }

  else if(path === "/gem" || path === "/gemini") {
    return Response.redirect("https://portal.mozz.us/gemini/jordanreger.com", 302);
  }

  else if(path === "/srht") {
    return Response.redirect("https://sr.ht/~jordanreger", 302);
  }

  else if(path === "/github") {
    return Response.redirect("https://github.com/jordanreger", 302);
  }

  else if(path === "/mastodon" || path === "/@jr") {
    return Response.redirect("https://indieweb.social/@jr", 302);
  }

  else if(path === "/twitter") {
    return Response.redirect("https://twitter.com/jxreger", 302);
  }

  else if(path === "/yt" || path === "/youtube") {
    return Response.redirect("https://youtube.com/@jordanreger", 302);
  }

  else if(path === "/linkedin" || path === "/in") {
    return Response.redirect("https://linkedin.com/in/jordanreger", 302);
  }

  else {
    return Response.redirect(`https://jordanreger.com${path}.html`, 302);
  }
}

await serve(handler);
