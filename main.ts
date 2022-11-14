let root = ".";

if (Deno.args[0] !== "localhost") {
    root = "./com"
}

const App = {
    routes: {
        "/": `${root}/pages/index.html`,
        "/glass": `${root}/pages/glass.html`,
        "/test": `${root}/pages/test.html`,

        "/protocolTest": `${root}/pages/protocolTest.html`,

        "/blog": `${root}/pages/blog.html`,

        /* archive */
        "/archive/blog": `${root}/pages/archive/blog/index.html`,
	      "/archive/blog/left": `${root}/pages/archive/blog/left.html`,
        "/blog/left": `https://jordanreger.com/archive/blog/left`,

        /* wiki */
        "/wiki": `${root}/pages/wiki/index.html`,
        "/wiki/dev/conventional-commits": `${root}/pages/wiki/conventional-commits.md`,
        "/wiki/dev/sourcehut-to-github-mirror": `${root}/pages/wiki/sourcehut-to-github-mirror.md`,
        "/wiki/dev/deno-deploy": `${root}/pages/wiki/deno-deploy.md`,
        "/wiki/localhost-irc": `${root}/pages/wiki/localhost-irc.md`,
        "/wiki/other/swedish": `${root}/pages/wiki/swedish.md`,

        /* resources */
        "/index.css": `${root}/static/index.css`,
        "/logo.svg": `${root}/static/logo.svg`,
        "/robots.txt": `${root}/static/robots.txt`
    }
}

import Crate from "https://crate.land/mod.ts";
const crate = new Crate();

crate.serve(App);
