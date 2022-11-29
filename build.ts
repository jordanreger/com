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
function templating(src: string, file: string) {
  const template = Deno.readTextFileSync(`resources${slash}template.html`);
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
    const links_path = frontmatter.links.replaceAll(".", "-") + "_links.html";
    let links_content = Deno.readTextFileSync(`.${slash}links${slash}${links_path}`);

    let match = links_content.match(/\<li\>\<a href="(.*?)"\>(.*?)\<\/a\>\<\/li\>/gmis);
    let active_path = frontmatter.active.split("/");
    match?.forEach(match => {
      for(const path of active_path){
        if(match.includes(">" + path + "<")) {
          links_content = links_content.replace(match, `<i>${match}</i>`);
        }
      }
    })
    function get0x7d0date() {
      function pad(n) {
        return (n < 10) ? ("0" + n) : n;
      }

      var now = new Date();
      var year = now.getFullYear() - 2000;
      var day_of_year = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24) - 1;
      var month_number = Math.floor((day_of_year) / 14);
      var month = (String.fromCharCode(65 + month_number) === "[") ? "+" : String.fromCharCode(65 + month_number);
      var day = day_of_year - (month_number * 14);

      var arvelie_date = `${pad(year)}${month}${pad(day)}`;
      return arvelie_date;
    }
    
    src = src.replaceAll("{ links }", links_content);

    src = src.replaceAll("{ source link }", `https://git.sr.ht/~jordanreger/com/tree/main/item/site/${file}`);

    src = src.replaceAll("{ date }", get0x7d0date());
  }
  
  return src;
}

try { Deno.readDirSync(`build${slash}site`) } catch(_) { Deno.mkdirSync(`build${slash}site`) }
getFiles(`site`).forEach(file => {
  if(!file.includes("robots.txt")) {
    let contents = Deno.readTextFileSync(file);
    file = file.replace(`site${slash}`, "");
    contents = templating(contents, file);
    file = `build${slash}` + file;
    Deno.writeTextFileSync(file, contents);
  } else {
    const build_file = file.replace(`site${slash}`, `build${slash}`);
    Deno.copyFileSync(file, build_file);
  }
});

try { Deno.readDirSync(`build${slash}links`) } catch(_) { Deno.mkdirSync(`build${slash}links`) }
getFiles(`links`).forEach(file => {
  const build_file = file.replace(`links${slash}`, `build${slash}links${slash}`);
  Deno.copyFileSync(file, build_file);
});

try { Deno.readDirSync(`build${slash}resources`) } catch(_) { Deno.mkdirSync(`build${slash}resources`) }
getFiles(`resources`).forEach(file => {
  if(!file.includes("fonts")) {
    const build_file = file.replace(`resources${slash}`, `build${slash}resources${slash}`);
    Deno.copyFileSync(file, build_file);
  }
});

try { Deno.readDirSync(`build${slash}resources${slash}fonts`) } catch(_) { Deno.mkdirSync(`build${slash}resources${slash}fonts`) }
getFiles(`resources${slash}fonts`).forEach(file => {
  const build_file = file.replace(`resources${slash}fonts${slash}`, `build${slash}resources${slash}fonts${slash}`);
  Deno.copyFileSync(file, build_file);
});