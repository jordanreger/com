/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Buying a Google Glass in 2022 - Jordan Reger</title>
        <meta name="title" content="Buying a Google Glass in 2022 - Jordan Reger" />
        <meta
          name="description"
          content="Software developer in training, mountain biker, weather enthusiast and person attempting to learn Swedish."
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
            <div class="title">Buying a Google Glass in 2022</div>
            <br />
            <div class="tag">{new Date("2022-10-20T21:28:00.000-04:00").toString()}</div>
            <div class="body">
              Yes, I bought a Google Glass in 2022...
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag" id="#introduction">Introduction</div>
            <div class="body">
              If you don't know what Google Glass is, you must not know me - I talk about it quite a lot.
              For one, it's super nostalgic - my dad had 2 of them in the hayday but sold them not long after.
              It's also an absolutely astonishing device.
              Google Glass was first introduced at Google I/O 2012 with an <a href="https://www.youtube.com/watch?v=D7TB8b2t3QE">absolutely amazing demo</a>... watch it if you don't already know what I'm talking about.
              It's essentially an AR monocle.
              Using a prism that is located right above your line of sight, it displays useful apps such as navigation, email, calls, etc. right in your environment!
              Unfortunately, this was released in 2012-2013 so the idea of wearing a computer on your head was completely alien, and Google killed the project.
              Nowadays, however, we have VR headsets and even AR glasses galore!
              So why couldn't Google have kept releasing them until the public would eventually warm up to the idea?
              Well, according to <a href="https://twitter.com/warren_craddock/status/1579532960164118528?s=20&t=SX4KcyWvW7ktkKN4eH7NqQ">Warren Craddock on Twitter</a>, they just didn't have a "<a href="https://en.wikipedia.org/wiki/Killer_application">killer app</a>."
            </div>
            <br/>
            <div class="tag" id="#whats-the-state-of-glass-today">What's the state of Glass today?</div>
            <div class="body">
              Certainly not what it was 10 years ago.
              In fact, it's nowhere near - Google shut down all their internal APIs (for the Explorer Editions) quite a long time ago, and left one final update (XE24) that essentially turned it into a Bluetooth controller with a camera on it.
              It's all left up to individual developers (like me!) to develop apps now, even though there's no app store.
              So why on earth would you buy one of these things?!
            </div>
            <br/>
            <div class="tag" id="#why">Why?</div>
            <div class="body">
              As I mentioned in the <a href="#introduction">intro</a>, these things are super nostalgic.
              I remember being 9 or 10 doing the little head flick to "wake up glass," and seeing the time.
              Also, despite almost the entire internet's opinion, I think they look awesome.
              As mentioned in my <a href="/about">about</a> section, I am a software developer in training.
              In fact, I'm studying Java (for now). 
              Google Glass gives me a perfect chance to learn the ins and outs of Java on a fun, interactive level.
              Also, I love "weird" form factors when it comes to technology - cyberdecks, glasses, tiny computers, etc.
              Google Glass is the pinnacle of weird-form technology in my opinion!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
