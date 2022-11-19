let root = "./build";

if (Deno.args[0] !== "localhost") {
    root = "./com/build"
}

const App = {
    routes: {
        "/": `${root}/index.html`,
        "/updates.html": `${root}/updates.html`,
        "/blog.html": `${root}/blog.html`,
        "/test.html": `${root}/test.html`,

        /* wiki */
        "/wiki.html": `${root}/wiki.html`,

        "/wiki/dev/conventional-commits.md": `${root}/wiki/dev/conventional-commits.md`,
        "/wiki/dev/sourcehut-to-github-mirror.md": `${root}/wiki/dev/sourcehut-to-github-mirror.md`,
        "/wiki/dev/deno-deploy.md": `${root}/wiki/dev/deno-deploy.md`,

        "/wiki/tools/protocolTest.html": `${root}/wiki/tools/protocolTest.html`,
        "/wiki/tools/0x7D0.html": `${root}/wiki/tools/0x7D0.html`,
        "/wiki/tools/calendar.html": `${root}/wiki/tools/calendar.html`,

        "/wiki/other/localhost-irc.md": `${root}/wiki/other/localhost-irc.md`,
        "/wiki/other/glass.md": `${root}/wiki/other/glass.md`,
        "/wiki/other/swedish.md": `${root}/wiki/other/swedish.md`,

        /* resources */
        "/index.css": `${root}/index.css`,
        "/logo.svg": `${root}/logo.svg`,
        "/robots.txt": `${root}/robots.txt`
    }
}

import Crate from "https://crate.land/mod.ts";
const crate = new Crate();

crate.serve(App);
