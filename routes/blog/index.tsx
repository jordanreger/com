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
          content="Software developer in training, mountain biker, weather enthusiast and person attempting to learn Swedish."
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
            This is my blog.
          </div>
        </div>
      </div>
    </main>
  );
}
