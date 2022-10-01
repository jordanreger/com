/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jordan Reger</title>
        <meta name="title" content="Jordan Reger"/>
        <meta name="description" content="Software developer in training, mountain biker, weather enthusiast and person attempting to learn Swedish."/>
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <div class="header">
        <Header active="/"></Header>
      </div>
      <div class="x">
        <div class="box" id="cover">
          <div class="content">
            <div class="title">Jordan Reger</div>
            <div class="description">Software developer in training, mountain biker, weather enthusiast and person attempting to learn Swedish. Yes, this site is bare right now - it won't remain that way for long.</div>
            <br/>
            <div class="socials">
              <a href="https://twitter.com/jxreger">Twitter</a> / <a href="https://youtube.com/jordanreger">Youtube</a> / <a href="mailto:jordanreger@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag">SOURCE</div>
            <div class="body">
              View the source at <a href="https://sr.ht/~jordanreger/com">sr.ht/~jordanreger/com</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}