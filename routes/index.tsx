/** @jsx h */
import { Head } from "$fresh/runtime.ts";

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
        <div class="sourcehut">
          <a href="https://sr.ht/~jordanreger">Sourcehut</a>
        </div>
      </div>
      <div class="x">
        <div class="box">
          <div class="tag" id="about">ABOUT</div>
          <div class="content">
            <div>
              I write code, ride bikes, make coffee, and I'm currently learning Swedish.
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
            Sourcehut — <a href="https://sr.ht/~jordanreger">sr.ht/~jordanreger</a>
            <br/>
            Github — <a href="https://github.com/jordanreger">github.com/jordanreger</a>
            <br/>
            Twitter — <a href="https://twitter.com/jxreger">@jxreger</a>
          </div>
        </div>
        <div class="box">
          <div class="tag" id="projects">PROJECTS</div>
          <div class="content">
            <a href="https://sr.ht/~jordanreger/cc">cc</a> — computercraft scripts
            <br/>
            <a href="https://ltx.deno.dev">LTX</a> — your one stop shop for everything space.
            <br/>
            <a href="https://github.com/jordanreger/crate">crate</a> — a fullstack web framework built with Deno
            <br/>
            <a href="https://man.sr.ht/~jordanreger/deno-deploy">Deploy + Sourcehut</a> — a build file to deploy from Sourcehut
            <br/>
            <a href="https://github.com/jordanreger/xxv">xxv</a> — a lightweight offline web app launcher
            <br/>
            <a href="https://github.com/jordanreger/latt">latt</a> — a lit element router
            <br/>
            <a href="https://github.com/jordanreger/stellarDrive">stellarDrive</a> — an experiment in web-based dashboard UI
            <br/>
            <a href="https://github.com/jordanreger/konst">konst</a> — a web-based console
          </div>
        </div>
      </div>
    </main>
  );
}