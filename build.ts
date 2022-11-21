const path = "./site", build = "./build";
let slash = "/";

import { join } from "https://deno.land/std@0.165.0/path/mod.ts";
import { parse } from "https://deno.land/std@0.165.0/encoding/toml.ts";

// checks if build directory exists. if not, make it!
try { Deno.readDirSync(build) } catch(_) { Deno.mkdirSync(build) }

if(Deno.build.os === "windows") {
  slash = "\\";
}

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
  dir = dir.replace(`site${slash}`, "");
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

/* deals with the templating and the frontmatter of each page */
function templating(src: string) {
  const template = Deno.readTextFileSync(`site${slash}template.html`);
  let frontmatter = src.match(/---(.*?)---/gmis);

  /* replaces body of template with file */
  src = template.replace("{ body }", src);
  if(frontmatter) {
    frontmatter = frontmatter[0];
    src = src.replaceAll(frontmatter, "");
    frontmatter = frontmatter.replaceAll("---", "");
    /* parses it into toml */
    frontmatter = parse(frontmatter);

    /* replaces title, description, and nav links */
    src = src.replaceAll("{ title }", frontmatter.title);
    src = src.replaceAll("{ description }", frontmatter.description);
    const links_path = frontmatter.links.replaceAll(".", slash) + slash + "links.html";
    let links_content = Deno.readTextFileSync(`site${slash}${links_path}`);

    let match = links_content.match(/\<li\>\<a href="(.*?)"\>(.*?)\<\/a\>\<\/li\>/gmis);
    let active_path = frontmatter.active.split("/");
    match?.forEach(match => {
      for(const path of active_path){
        if(match.includes(">" + path + "<")) {
          links_content = links_content.replace(match, `<i>${match}</i>`);
        }
      }
    })
    
    src = src.replaceAll("{ links }", links_content);
  }
  
  return src;
}

/* writes the original content to the build files */
getFiles(path).forEach(file => {
  if(file.includes(".html") || file.includes(".css") || file.includes(".txt")){
    if(file !== `site${slash}template.html` && !file.includes("links.html")) {
      let contents = Deno.readTextFileSync(file);
      file = file.replace(`site${slash}`, "");
      contents = templating(contents);
      
      file = `build${slash}` + file;
      Deno.writeTextFileSync(file, contents);

    } else {
      file = file.replace(`site${slash}`, "");
    }
  } else {
    const contents = Deno.readFileSync(file);
    file = file.replace(`site${slash}`, "");
    file = `build${slash}` + file;
    Deno.writeFileSync(file, contents);
  }
});