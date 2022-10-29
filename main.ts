const App = {
    routes: {
        "/": "./com/pages/index.html",
        "/glass": "./com/pages/glass.html",

        /* resources */
        "/logo.svg": "./com/static/logo.svg"
    }
}

import Crate from "https://crate.land/mod";
const crate = new Crate();

crate.serve(App);