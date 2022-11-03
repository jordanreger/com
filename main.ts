let root = ".";

if (Deno.args[0] !== "localhost") {
    root = "./com"
}

const App = {
    routes: {
        "/": `${root}/pages/index.html`,
        "/glass": `${root}/pages/glass.html`,
        "/test": `${root}/pages/test.html`,

        "/blog": `${root}/pages/blog/index.html`,

        /* resources */
        "/index.css": `${root}/static/index.css`,
        "/logo.svg": `${root}/static/logo.svg`,
        "/robots.txt": `${root}/static/robots.txt`,
    }
}

import Crate from "https://crate.land/mod.ts";
const crate = new Crate();

crate.serve(App);
