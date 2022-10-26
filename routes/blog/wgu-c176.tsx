/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../../islands/Header.tsx";

export default function Home() {
  return (
    <main>
      <Head>
        <title>WGU C176 COMPTIA Project+ Study Guide</title>
        <meta name="title" content="WGU C176 COMPTIA Project+ Study Guide" />
        <meta
          name="description"
          content="An incomprehensive study guide for WGU's C176 course, which covers COMPTIA's Project+ exam."
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
            <div class="title">WGU C176 COMPTIA Project+ Study Guide</div>
            <br />
            <div class="tag">{new Date("2022-10-26T12:00:00.000-04:00").toString()}</div>
            <div class="body">
            An incomprehensive study guide for WGU's C176 course, which covers COMPTIA's Project+ exam.
            </div>
          </div>
        </div>
        <div class="box">
          <div class="content">
            <div class="tag" id="introduction">Introduction</div>
            <div class="body">
                I am a WGU Software Development B.S. student (as of 10/26/2022). Below is a guide on how to pass a class that I was not familiar with previously. I will update this page to include an in-house version of my notes, especially after I pass this class.
                <br/>
                <br/>
                <a href="https://jordanreger.notion.site/C176-COMPTIA-Project-17e3f0483d4a453d8afe366d6af35a9f">Notion page</a>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </main>
  );
}
