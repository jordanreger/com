let root = ".";

if (Deno.args[0] !== "localhost") {
    root = "./com"
}

const App = {
    routes: {
        "/": `${root}/pages/index.html`,
        "/glass": `${root}/pages/glass.html`,
        "/test": `${root}/pages/test.html`,

        "/blog": `${root}/pages/blog.html`,

        /* archive */
        "/archive/blog": `${root}/pages/archive/blog/index.html`,
	    "/archive/blog/left": `${root}/pages/archive/blog/left.html`,
        "/blog/left": `https://jordanreger.com/archive/blog/left`,

        /* resources */
        "/index.css": `${root}/static/index.css`,
        "/logo.svg": `${root}/static/logo.svg`,
	    "/left.png": `${root}/static/left.png`,
        "/robots.txt": `${root}/static/robots.txt`,

	/* redirects */
	"/@jr": "https://indieweb.social/@jr"
    }
}

import Crate from "https://crate.land/mod.ts";
const crate = new Crate();

crate.serve(App);
