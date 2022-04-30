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
              I am a frontend engineer and a storm spotter.
              I've been writing software for 3 years and I've been tracking storms for less than a year.
              If you'd like to chat, reach out through one of my contact channels below.
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
            Mastodon — <a href="https://indieweb.social/@jr">jr@indieweb.social</a>
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
          <div class="tag" id="source">SOURCE</div>
          <div class="content">
            View the source on <a href="https://sr.ht/~jordanreger/com">Sourcehut</a> and eventually Github (once I figure out a decent mirroring technique).
          </div>
        </div>
      </div>
    </main>
  );
}
