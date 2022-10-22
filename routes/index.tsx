/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jordan Reger</title>
        <meta name="title" content="Jordan Reger" />
        <meta
          name="description"
          content="Software developer in training"
        />
        <link rel="stylesheet" href="./index.css" />
        <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <div class="header">
        <Header active="/"></Header>
      </div>
      <div class="x">
        <div class="box" id="cover">
          <div class="content">
            <div class="title">Jordan Reger</div>
            <br />
            <div class="description">
              I am a software developer in training. If you'd like to talk about urban planning, rockets, mountain bikes, Swedish, weather, software, Google Glass, dystopian sci-fi books and movies or something else, contact me below!
              If you find a social media account with my name on it *not* listed below, chances are it's not mine or I don't use it anymore.
            </div>
            <div class="socials">
              <a href="https://twitter.com/jxreger">Twitter</a> /{" "}
              <a href="https://indieweb.social/@jr">Mastodon</a> /{" "}
              <a href="https://youtube.com/jordanreger">YouTube</a> /{" "}
              <a href="https://linkedin.com/in/jordanreger">LinkedIn</a> /{" "}
              <a href="mailto:jordanreger@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div class="source">
          View the source at <a href="https://sr.ht/~jordanreger/com">sr.ht/~jordanreger/com</a>
        </div>
      </div>
    </main>
  );
}
