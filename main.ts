let root = ".";

if (location.hostname !== "localhost") {
    root = "./com"
}

const App = {
    routes: {
        "/": `${root}/pages/index.html`,
        "/glass": `${root}/pages/glass.html`,

        /* resources */
        "/logo.svg": `${root}/static/logo.svg`
    }
}

import Crate from "https://crate.land/mod";
const crate = new Crate();

crate.serve(App);