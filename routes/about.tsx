/** jsx h */

import {h} from "preact";
import {Head} from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";

export default function About() {
    return (
        <main>
            <Head>
                <title>About - Jordan Reger</title>
                <meta name="title" content="About - Jordan Reger"/>
                <meta name="description"
                      content="Software developer in training"/>
                <link rel="stylesheet" href="./index.css"/>
                <link rel="icon" href="/logo.svg" sizes="any" type="image/svg+xml"/>
            </Head>
            <div class="header">
                <Header active="/about"></Header>
            </div>
            <div class="x">
                <div class="box">
                    <div class="content">
                        <div class="body">
                            Hej! My name is Jordan, and I currently live in Columbus, Ohio.
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="tag">EDUCATION</div>
                        <div class="body">
                            I am a software developer in training at <a href="https://wgu.edu">WGU</a> and I have an
                            associates degree from The Ohio State University. I don't <i>plan</i> on doing anymore
                            school after this, but who knows!
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="tag">SVENSKA</div>
                        <div class="body">
                            Jag planerar att flytta till Sverige en av dessa dagar. Jag måste träna mer!
                            <br/>
                            <br/>
                            I am a native English speaker with three years of French, a few months of Toki Pona (<a href="https://tokipona.org">tokipona.org</a>), and about 2 months worth of Swedish under my belt. <a href="https://twitter.com/jxreger">Follow me</a> on Twitter to watch me progress (or, mainly, talk about rockets and urban planning).
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="tag">MTB</div>
                        <div class="body">
                            I currently ride a 2019 Trek Marlin 6. I run about 2atm in both tires, since I use it mainly
                            for trail riding but I also commute with it sometimes.
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div class="tag">WEATHER</div>
                        <div class="body">
                            I am a NWS trained spotter. No, I haven't chased any tornadoes...
                            <br/>
                            <br/>
                            yet...
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}