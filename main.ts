const App = {
    routes: {
        "/": "./pages/index.html",
        "/glass": "./pages/glass.html",

        /* resources */
        "/logo.svg": "./static/logo.svg"
    }
}

import Crate from "https://crate.land/mod";
const crate = new Crate();

crate.serve(App);