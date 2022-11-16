let root = "./site";

if (Deno.args[0] !== "localhost") {
    root = "./com/site"
}

const App = {
    routes: {
        "/": `${root}/index.html`,
        "/blog": `${root}/blog.html`,
        "/test": `${root}/test.html`,

        /* archive */
        "/archive/blog": `${root}/archive/blog/index.html`,
	    "/archive/blog/left": `${root}/archive/blog/left.html`,
        "/blog/left": `${root}/archive/blog/left.html`,

        /* wiki */
        "/wiki": `${root}/wiki/index.html`,

        "/wiki/dev/conventional-commits": `${root}/wiki/dev/conventional-commits.md`,
        "/wiki/dev/sourcehut-to-github-mirror": `${root}/wiki/dev/sourcehut-to-github-mirror.md`,
        "/wiki/dev/deno-deploy": `${root}/wiki/dev/deno-deploy.md`,

        "/wiki/tools/protocolTest": `${root}/wiki/tools/protocolTest.html`,
        "/wiki/tools/0x7D0": `${root}/wiki/tools/0x7D0.html`,
        "/wiki/tools/calendar": `${root}/wiki/tools/calendar.html`,

        "/wiki/other/localhost-irc": `${root}/wiki/other/localhost-irc.md`,
        "/wiki/other/glass": `${root}/wiki/other/glass.md`,
        "/wiki/other/swedish": `${root}/wiki/other/swedish.md`,

        /* resources */
        "/index.css": `${root}/index.css`,
        "/logo.svg": `${root}/logo.svg`,
        "/robots.txt": `${root}/robots.txt`
    }
}

import Crate from "https://crate.land/mod.ts";
const crate = new Crate();

crate.serve(App);
