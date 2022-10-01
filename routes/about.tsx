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
        <Header active="/about"></Header>
      </div>
      <div class="x">
        <div class="box">
          <div class="content">
            <div class="tag">EDUCATION</div>
            <div class="body">
              I am a software developer in training at <a href="https://wgu.edu">WGU</a>, and I have an associates degree from The Ohio State University. I don't <i>plan</i> on doing anymore school after this, but who knows!
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag">MTB</div>
            <div class="body">
              I currently ride a 2019 Trek Marlin 6. I run about 2atm in both tires, since I use it mainly for trail riding but I also commute with it sometimes.
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag">SWEDISH</div>
            <div class="body">
              I plan on moving to Sweden someday and I love the language (so far). I don't have enough time for a blog but just know my Duolingo streak is going strong.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}