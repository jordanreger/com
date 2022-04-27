/** @jsx h */
import { h, Head } from "../client_deps.ts";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jordan Reger</title>
        <meta name="title" content="Jordan Reger"/>
        <meta name="description" content="A frontend engineer that builds fast and light web experiences."/>

        <link rel="stylesheet" href="./index.css" />
      </Head>
      <div class="header">
        <div class="title">Jordan Reger</div>
        <div class="github">
          <a href="https://github.com/jordanreger">Github</a>
        </div>
      </div>
      <div class="x">
        <div class="box">
          <div class="tag" id="about">ABOUT</div>
          <div class="content">
            <div>
              I am a frontend engineer who builds fast and light web experiences in Columbus, Ohio.
              I have ~3 years of experience with building web apps, ~1 year with <a href="https://deno.land">Deno</a> and TypeScript, and I've been learning HTML and CSS since about 2012.
              If you are looking to hire a frontend engineer, please contact me using a contact channel below!
            </div>
          </div>
        </div>
        <div class="box">
          <div class="tag" id="contact">CONTACT</div>
          <div class="content">
            Email — <a href="mailto:jordanreger@gmail.com">jordanreger@gmail.com</a>
            <br/>
            Discord — <a href="https://discord.com/invite/Zma3aV9Zdm">jordanreger#7891</a>
            <br/>
            Github — <a href="https://github.com/jordanreger">github.com/jordanreger</a>
            <br/>
            Sourcehut — <a href="https://sr.ht/~jordanreger">sr.ht/~jordanreger</a>
            <br/>
            Dribbble — <a href="https://dribbble.com/jordanreger">dribbble.com/jordanreger</a>
            <br/>
            Mastodon — <a href="https://indieweb.social/@jr">@jr</a>
            <br/>
            Twitter — <a href="https://twitter.com/jxreger">@jxreger</a>
          </div>
        </div>
        <div class="box">
          <div class="tag" id="projects">PROJECTS</div>
          <div class="content">
            LTX — your one stop shop for everything space. [<a href="https://github.com/LTXland">Source</a>] [<a href="https://ltx.deno.dev">Website</a>]
            <br/>
            crate — a fullstack web framework built with Deno! [<a href="https://github.com/jordanreger/crate">Source</a>] [<a href="https://crate.land">Website</a>]
            <br/>
            Deploy + Sourcehut — a build file to deploy from Sourcehut [<a href="https://man.sr.ht/~jordanreger/deno-deploy">Source</a>]
            <br/>
            xxv — a lightweight offline web app launcher [<a href="https://github.com/jordanreger/xxv">Source</a>] [<a href="https://xxv.network">Website</a>]
            <br/>
            latt — a lit element router [<a href="https://github.com/jordanreger/latt">Source</a>]
            <br/>
            stellarDrive — an experiment in web-based dashboard UI [<a href="https://github.com/jordanreger/stellarDrive">Source</a>]
            <br/>
            konst — a web-based console [<a href="https://github.com/jordanreger/konst">Source</a>] [<a href="https://konst.netlify.app">Website</a>]
          </div>
        </div>
        <div class="box">
          <div class="tag" id="stack">STACK</div>
          <div class="content">
            <a href="https://elementary.io">elementary</a> — my linux distro of choice
            <br/>
            <a href="https://deno.land">Deno</a> — my favorite JS/TS runtime
            <br/>
            <a href="https://deno.com/deploy">Deno Deploy</a> — how I host my sites
            <br/>
            <a href="https://marketplace.visualstudio.com/items?itemName=anotherglitchinthematrix.monochrome">monochrome</a> — my VSCode theme
          </div>
        </div>
        <div class="box">
          <div class="tag" id="fast-and-light">FAST AND LIGHT</div>
          <div class="content">
            I believe that software should be open and free, but also lightweight.
            While it's not necessary with speeds of 500+mbps and terabytes of storage on average nowadays, i think it's still necessary to strive for fast and light.
            Most software takes advantage of the massive amounts of resources, and there's good reason for that - games, movies, etc. are getting heavier because they're getting better.
            But for software that could be light, why do we write it to be heavy just because we can?
            I think, at the very least, that writing the best code you can in the fastest and lightest way possible is a fun challenge.
            I propose that the new era of the web should be as light as possible. This is the software engineer's "<a href="http://minifesto.org/">minifesto</a>."
          </div>
        </div>
        <div class="box">
          <div class="tag" id="source">SOURCE</div>
          <div class="content">
            View the source on <a href="https://sr.ht/~jordanreger/com">Sourcehut</a> and eventually Github (once I figure out a decent mirroring technique).
          </div>
        </div>
      </div>
    </main>
  );
}
