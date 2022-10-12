/** jsx h */

import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Header(props: { active: string }) {
  const items = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT",
      href: "/about",
    },
    {
      name: "PROJECTS",
      href: "/projects",
    },
    {
      name: "SOURCEHUT",
      href: "https://sr.ht/~jordanreger",
      external: true
    },
  ];

  return (
    <div class="header">
      <Head>
        <link rel="stylesheet" href="./index.css" />
      </Head>
      <img src="./logo.svg" alt="logo" class="logo" />
      <div class="links">
        {items.map((item) => (
          <a href={item.href} class={props.active == item.href ? "active" : ""}>
            {item.name} {item.external ? <span class="arrow">↗️</span> : null}
          </a>
        ))}
      </div>
    </div>
  );
}