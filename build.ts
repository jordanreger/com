const path = "./site", build = "./build";

import { join } from "https://deno.land/std@0.165.0/path/mod.ts";
import { parse, stringify } from "https://deno.land/std@0.165.0/encoding/toml.ts";

// checks if build directory exists. if not, make it!
try { Deno.readDirSync(build) } catch(_) { Deno.mkdirSync(build) }

/* returns a list of all directories in the original path to make in the build path */
function getDirs(path: string) {
  const dirs: string[] = [];
  const get_dir = (path: string) => {
    for (const dirEntry of Deno.readDirSync(path)) {
      if (dirEntry.isFile) {
        continue;
      } else if (dirEntry.isDirectory) {
        dirs.push(join(path, dirEntry.name));
        get_dir(join(path, dirEntry.name));
      }
    }
  };
  get_dir(path);
  return dirs;
}

/* removes original path and makes the directory in the build path (if it doesn't already exist) */
getDirs(path).forEach(dir => {
  dir = dir.replace("site\\", "");
  try { Deno.readDirSync(join(build, dir)) } catch(_) { Deno.mkdirSync(join(build, dir)) }
});

/* copies all original files to their respective folders */
function getFiles(path: string) {
  const files: string[] = [];
  const get_files = (path: string) => {
    for (const dirEntry of Deno.readDirSync(path)) {
      if (dirEntry.isDirectory) {
        get_files(join(path, dirEntry.name));
      } else if (dirEntry.isFile) {
        files.push(join(path, dirEntry.name));
      }
    }
  };
  get_files(path);
  return files;
}

function templating(src: string) {
  const template = Deno.readTextFileSync("site\\template.html");
  let frontmatter = src.match(/---(.*?)---/gmis);

  src = template.replace("{ body }", src);
  if(frontmatter) {
    frontmatter = frontmatter[0];
    src = src.replaceAll(frontmatter, "");
    frontmatter = frontmatter.replaceAll("---", "");
    frontmatter = parse(frontmatter);
    src = src.replaceAll("{ title }", frontmatter.title);
    src = src.replaceAll("{ description }", frontmatter.description);
  }
  
  return src;
}

/* writes the original content to the build files */
getFiles(path).forEach(file => {
  let contents = Deno.readTextFileSync(file);
  if(file !== "site\\template.html") {
    if(file.includes(".html")) {
      contents = templating(contents);
    }

    file = file.replace("site\\", "build\\");
    Deno.writeTextFileSync(file, contents);
  }
});