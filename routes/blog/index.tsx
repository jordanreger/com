/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Blog - Jordan Reger</title>
        <meta name="title" content="Blog - Jordan Reger" />
        <meta
          name="description"
          content="Software developer in training"
        />
        <link rel="stylesheet" href="./index.css" />
        <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <div>
        <Header active="/blog"></Header>
      </div>
      <div class="x">
        <div class="box" id="cover">
          <div class="content">
            <div class="body">
              This is my blog, containing many (probably useless) topics.
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag"><u><a href="/blog/glass-setup">Google Glass Setup (XE24)</a></u></div>
            <div class="body">
              How to setup a Google Glass for XE24.
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag"><u><a href="/blog/buying-a-google-glass-in-2022">Buying a Google Glass in 2022</a></u></div>
            <div class="body">
              Yes, I bought a Google Glass in 2022...
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
