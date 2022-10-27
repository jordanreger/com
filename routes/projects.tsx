/** jsx h */

import {h} from "preact";
import {Head} from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";

export default function Projects() {
    return (
            <main>
                <Head>
                    <title>Projects - Jordan Reger</title>
                    <meta name="title" content="Projects - Jordan Reger"/>
                    <meta name="description"
                        content="Software developer in training"/>
                    <link rel="stylesheet" href="./index.css"/>
                    <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml"/>
                </Head>
                <div class="header">
                    <Header active="/projects"></Header>
                </div>
                <div class="x">
                    <div class="box">
                        <div class="content">
                            <div class="body">
                                I am currently in school for software development. This means that most of my time goes towards that, and not towards my projects. However, I have been writing code for about 3 years now, so here's a list of all the projects that have come before.
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="content">
                            <div class="tag">Glass</div>
                            <div class="body">
                            Glassware built for Google Glass XE24
                                <br/>
                                <br/>
                                <a href="/glass">Glass page</a> / <a href="https://sr.ht/~jordanreger/glass">Sourcehut</a>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="content">
                            <div class="tag">LTX/ITSLAUNCHTIME</div>
                            <div class="body">
                                LTX and itslaunchtime were two projects that were essentially the same thing - a website to show people multiple views of a rocket launch all at once. Unfortunately, neither of them panned out very well - due to stress, scope creep, and just lack of usage, I ended production on both. This does not mean they will be dead forever...
                                <br/>
                                <br/>
                                <a href="https://ltx.deno.dev">LTX website</a> / <a href="https://github.com/LTXland">LTX GitHub</a>
                                <br/>
                                <a href="https://github.com/jordanreger/itslaunchtime">itslaunchtime repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="content">
                            <div class="tag">CRATE</div>
                            <div class="body">
                                crate is a fullstack web framework built with <a href="https://deno.land">Deno</a> that allows you to write one file and deploy it as a website <i>and</i> a desktop app. Functionality is limited due to restraints on JavaScript's ability to make desktop apps (do NOT email me telling me about Electron or Tauri, I know they exist).
                                <br/>
                                <br/>
                                <a href="https://github.com/jordanreger/crate">GitHub repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="content">
                            <div class="tag">JORDANREGER.COM</div>
                            <div class="body">
                                This site is maintained regularly, and the code is hosted at <a href="https://sr.ht/~jordanreger/com">sr.ht/~jordanreger/com</a>. It is deployed using a custom built <a href="https://deno.com/deploy">Deno Deploy</a> to <a href="https://sourcehut.org">Sourcehut</a> build file.
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="content">
                            <div class="tag">OTHER</div>
                            <div class="body">
                                Check out my <a href="https://github.com/jordanreger">GitHub</a> and <a href="https://sr.ht/~jordanreger">Sourcehut</a> for more of my smaller projects.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            );
}