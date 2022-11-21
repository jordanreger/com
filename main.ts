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
        "/about.html": `${root}/about.html`,
        
        "/meta": `${root}/meta/index.html`,
        "/meta/about.html": `${root}/meta/about.html`,
        "/meta/blog.html": `${root}/meta/blog.html`,
        "/meta/updates.html": `${root}/meta/updates.html`,
        "/meta/about/index.html": `${root}/meta/about/index.html`,
        "/meta/about/jordan-reger.html": `${root}/meta/about/jordan-reger.html`,

        "/wiki": `${root}/wiki/index.html`,
        "/wiki/dev.html": `${root}/wiki/dev.html`,
        "/wiki/other.html": `${root}/wiki/other.html`,
        "/wiki/tools.html": `${root}/wiki/tools.html`,
        "/wiki/dev": `${root}/wiki/dev/index.html`,
        "/wiki/dev/markdown": `${root}/wiki/dev/markdown/index.html`,
        "/wiki/dev/markdown.html": `${root}/wiki/dev/markdown.html`,
        "/wiki/dev/markdown/conventional-commits.html": `${root}/wiki/dev/markdown/conventional-commits.html`,
        "/wiki/dev/markdown/deno-deploy.html": `${root}/wiki/dev/markdown/deno-deploy.html`,
        "/wiki/dev/markdown/glass.html": `${root}/wiki/dev/markdown/glass.html`,
        "/wiki/dev/markdown/sourcehut-to-github-mirror.html": `${root}/wiki/dev/markdown/sourcehut-to-github-mirror.html`,
        "/wiki/other": `${root}/wiki/other/index.html`,
        "/wiki/other/swedish.html": `${root}/wiki/other/swedish.html`,
        "/wiki/tools": `${root}/wiki/tools/index.html`,
        "/wiki/tools/0x7D0.html": `${root}/wiki/tools/0x7D0.html`,
        "/wiki/tools/calendar.html": `${root}/wiki/tools/calendar.html`,

        /* resources */
        "/index.css": `${root}/index.css`,
        "/logo.svg": `${root}/logo.svg`,
        "/robots.txt": `${root}/robots.txt`,
        "/resources/bladerunner2049tree.webp": `${root}/resources/bladerunner2049tree.webp`,
        "/resources/ghostintheshell.gif": `${root}/resources/ghostintheshell.gif`,
        "/resources/me.jpg": `${root}/resources/me.jpg`,

        /* Inter */
        "/resources/Inter/Inter-Thin.ttf": `${root}/resources/Inter/Inter-Thin.ttf`,
        "/resources/Inter/Inter-ExtraLight.ttf": `${root}/resources/Inter/Inter-ExtraLight.ttf`,
        "/resources/Inter/Inter-Light.ttf": `${root}/resources/Inter/Inter-Light.ttf`,
        "/resources/Inter/Inter-Regular.ttf": `${root}/resources/Inter/Inter-Regular.ttf`,
        "/resources/Inter/Inter-Medium.ttf": `${root}/resources/Inter/Inter-Medium.ttf`,
        "/resources/Inter/Inter-SemiBold.ttf": `${root}/resources/Inter/Inter-SemiBold.ttf`,
        "/resources/Inter/Inter-Bold.ttf": `${root}/resources/Inter/Inter-Bold.ttf`,
        "/resources/Inter/Inter-ExtraBold.ttf": `${root}/resources/Inter/Inter-ExtraBold.ttf`,
        "/resources/Inter/Inter-Black.ttf": `${root}/resources/Inter/Inter-Black.ttf`,
        
        "/resources/Inter/inter.css": `${root}/resources/Inter/inter.css`,
    }
}

import Crate from "https://deno.land/x/crate@v1.2.5/mod.ts";
const crate = new Crate();

crate.serve(App);
