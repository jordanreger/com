let root = "./build";

if (Deno.args[0] !== "localhost") {
    root = "./com/build"
}

const App = {
    routes: {
        "/": `${root}/index.html`,
        "/home.html": `${root}/home.html`,
        "/meta.html": `${root}/meta.html`,
        "/wiki.html": `${root}/wiki.html`,
        
        "/meta": `${root}/meta/index.html`,
        "/meta/about.html": `${root}/meta/about.html`,
        "/meta/blog.html": `${root}/meta/blog.html`,
        "/meta/test.html": `${root}/meta/test.html`,
        "/meta/updates.html": `${root}/meta/updates.html`,

        "/wiki": `${root}/wiki/index.html`,
        "/wiki/dev.html": `${root}/wiki/dev.html`,
        "/wiki/other.html": `${root}/wiki/other.html`,
        "/wiki/tools.html": `${root}/wiki/tools.html`,
        "/wiki/dev": `${root}/wiki/dev/index.html`,
        "/wiki/dev/conventional-commits.html": `${root}/wiki/dev/conventional-commits.html`,
        "/wiki/dev/deno-deploy.html": `${root}/wiki/dev/deno-deploy.html`,
        "/wiki/dev/glass.html": `${root}/wiki/dev/glass.html`,
        "/wiki/dev/sourcehut-to-github-mirror.html": `${root}/wiki/dev/sourcehut-to-github-mirror.html`,
        "/wiki/other": `${root}/wiki/other/index.html`,
        "/wiki/other/swedish.html": `${root}/wiki/other/swedish.html`,
        "/wiki/tools": `${root}/wiki/tools/index.html`,
        "/wiki/tools/0x7D0.html": `${root}/wiki/tools/0x7D0.html`,
        "/wiki/tools/calendar.html": `${root}/wiki/tools/calendar.html`,

        /* resources */
        "/index.css": `${root}/index.css`,
        "/logo.svg": `${root}/logo.svg`,
        "/robots.txt": `${root}/robots.txt`,
        "/resources/ghostintheshell.gif": `${root}/resources/ghostintheshell.gif`
    }
}

import Crate from "https://crate.land/mod.ts";
const crate = new Crate();

crate.serve(App);
