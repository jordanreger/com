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
        "/blog/digital-regression": `${root}/pages/blog/digital-regression.html`,

        /* resources */
        "/index.css": `${root}/static/index.css`,
        "/logo.svg": `${root}/static/logo.svg`
    }
}

import Crate from "https://deno.land/x/crate@v1.2.1/mod.ts";
const crate = new Crate();

crate.serve(App);