/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Google Glass - Jordan Reger</title>
        <meta name="title" content="Buying a Google Glass in 2022 - Jordan Reger" />
        <meta
          name="description"
          content="Yes, I bought a Google Glass in 2022..."
        />
        <link rel="stylesheet" href="../index.css" />
        <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <div>
        <Header></Header>
      </div>
      <div class="x">
        <div class="box" id="cover">
          <div class="content">
            <div class="title">Google Glass</div>
            <br />
            <div class="body">
              This is a project log for all of my Glassware and other Glass-related projects.
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag" id="introduction">Introduction</div>
            <div class="body">
              If you don't know <a href="/blog/buying-a-google-glass-in-2022">why I bought a Google Glass in 2022</a> or <a href="/blog/glass-setup">how to set one up</a> if you have one, read the corresponding blog posts.
              If you don't even know what Google Glass is?
              <br/>
              <br/>
              <a href="https://en.wikipedia.org/wiki/Google_Glass">wikipedia.org/wiki/Google_Glass</a>
            </div>
            <br/>
            <br/>
            <div class="tag" id="hello-glass">HelloGlass</div>
            <div class="body">
                A starter Glassware project.
                <br/>
                <a href="https://git.sr.ht/~jordanreger/HelloGlass">Sourcehut</a> / <a href="https://github.com/jordanreger/HelloGlass">GitHub</a>
                <br/>
                <br/>
                Below is a demo video of the Hello Glass app working on Glass (XE24).
                <br/>
                <br/>
                <video src="/helloglass.webm" controls></video>
                <br/>
                <br/>
                To use it, <a href="https://git.sr.ht/~jordanreger/HelloGlass/blob/main/HelloGlass.apk">download the apk</a> and use the following commands to install it:
                <br/>
                <pre>
                    cd Downloads # this is whatever directory you downloaded the apk to
                    <br/>
                    adb install HelloGlass.apk
                </pre>
                <br/>
                And now you have the HelloGlass app installed onto your Glass!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
