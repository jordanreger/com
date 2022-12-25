import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

import { login } from "https://esm.sh/masto@4.10.0";
import { statusUpdate } from "https://deno.land/x/twitter_api_client@v0.3.2/api_v1/tweets/update.ts";

import { parseFeed } from "https://deno.land/x/rss@0.5.6/mod.ts";

/* auth */
const twitter_auth = {
  consumerKey: Deno.env.get("TWITTER_CONSUMER_API_KEY"),
  consumerSecret: Deno.env.get("TWITTER_CONSUMER_API_SECRET"),
  token: Deno.env.get("TWITTER_ACCESS_TOKEN"),
  tokenSecret: Deno.env.get("TWITTER_ACCESS_TOKEN_SECRET")
}

const masto_auth = await login({
  url: 'https://indieweb.social',
  accessToken: Deno.env.get("MASTODON_ACCESS_TOKEN")
});

/* get new post */
async function get_latest_post() {
  const git_log_response = await fetch(
    "https://git.sr.ht/~jordanreger/com/log/main/rss.xml",
  );
  const git_log_xml = await git_log_response.text();
  const git_log_feed = await parseFeed(git_log_xml);

  if(git_log_feed.entries[0].title?.value === "posts: new post") {
    const response = await fetch(
      "https://jordanreger.com/atom.xml",
    );
    const xml = await response.text();
    const feed = await parseFeed(xml);
    const status = `${feed.entries[0].description?.value}
      
https://2jr.co/p/${feed.entries[0].title?.value}`;

    const _twitter  = await statusUpdate(twitter_auth, { status: status });
    const _masto = await masto_auth.statuses.create({ status: status, visibility: 'public' })
    return true;
  } else {
    return false;
  }
}

/* server */
function handler(req: Request): Response {
  const url = new URL(req.url);
  const path = url.pathname;
  if(path === "/") {
    return new Response("a <a href='https://indieweb.org/POSSE'>POSSE</a> server for <a href='https://jordanreger.com'>jordan reger</a>", { headers: { "content-type": "text/html; charset=utf-8" } });
  }
  else if(path === "/post") {
    get_latest_post();
    return Response.redirect('https://jordanreger.com/posts', 302);
  } else {
    return new Response("404", { headers: { "content-type": "text/html; charset=utf-8" } });
  }
}
console.log("Listening on http://localhost:8000");
serve(handler);