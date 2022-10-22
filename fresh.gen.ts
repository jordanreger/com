// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/blog/buying-a-google-glass-in-2022.tsx";
import * as $3 from "./routes/blog/glass-setup.tsx";
import * as $4 from "./routes/blog/index.tsx";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/projects.tsx";
import * as $$0 from "./islands/Header.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/blog/buying-a-google-glass-in-2022.tsx": $2,
    "./routes/blog/glass-setup.tsx": $3,
    "./routes/blog/index.tsx": $4,
    "./routes/index.tsx": $5,
    "./routes/projects.tsx": $6,
  },
  islands: {
    "./islands/Header.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
