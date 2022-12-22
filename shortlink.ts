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

  else if(path === "/btc") {
    return Response.redirect("bitcoin:BC1QDE65AWK70XH6TZVV4JEZ5S0LDU7HNYA0AYWF7Q?lightning=LNBC1P3E7EMCDQQPP5FS9CYCYN7XEGUCM8PSGTF3ARLSXMC9NXYXNHLA6SAUJ0995TYRNSSP5UQHRRUDK964EKVZWJ4Z6R5WXCGCR3KTT44W0YG497RFZ3UXN7ZFS9QRSGQCQPCXQY8AYQRZJQV06K0M23T593PNGL0JT7N9WZNP64FQNGVCTZ7VTS8NQ4TUKVTLJQZ8T6GQQ99QQQGQQQQQQQQQQQQQQ9GRZJQTSJY9P55GDCEEVP36FVDMRKXQVZFHY8AK2TGC5ZGTJTRA9XLAZ97Z8VSYQQ9CGQQUQQQQQQQQQQQQQQ9GHUSFH6TNP7WZGYGKK778FF7NRELH5K3WW52ZUG73JX77CSU4YQVKWWMALCPM2FT3UKE7X33SQ45K8S749M4AMVGE539KM6XGP03SK2QQKU57EA", 302);
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
