// deno-lint-ignore-file no-explicit-any
import { join } from "https://deno.land/std@0.165.0/path/mod.ts";
import { parse } from "https://deno.land/std@0.165.0/encoding/toml.ts";

let slash: string;
if(Deno.build.os === "windows") {
  slash = "\\";
} else {
  slash = "/";
}

// checks if build directory exists. if not, make it!
try { Deno.readDirSync(`.${slash}build`) } catch(_) { Deno.mkdirSync(`.${slash}build`) }

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
function get0x7d0date() {
  function pad(n: number) {
    return (n < 10) ? ("0" + n) : n;
  }

  const now: Date = new Date();
  const this_year: Date = new Date(now.getFullYear(), 0, 0);
  const year = now.getFullYear() - 2000;
  const day_of_year = Math.floor((now.valueOf() - this_year.valueOf()) / 1000 / 60 / 60 / 24) - 1;
  const month_number = Math.floor((day_of_year) / 14);
  const month = (String.fromCharCode(65 + month_number) === "[") ? "+" : String.fromCharCode(65 + month_number);
  const day = day_of_year - (month_number * 14);

  const arvelie_date = `${pad(year)}${month}${pad(day)}`;
  return arvelie_date;
}

function templating(src: string, file: string) {
  const template = Deno.readTextFileSync(`resources${slash}template.html`);
  let frontmatter: any;
  frontmatter = src.match(/---(.*?)---/gmis);
  frontmatter = frontmatter[0];
  
  if(!frontmatter.includes("template = false")) {
    src = template.replace("{ body }", src);
    src = src.replaceAll(frontmatter, "");
    frontmatter = frontmatter?.replaceAll("---", "");
    /* parses it into toml */
    frontmatter = parse(frontmatter);

    /* replaces title, description, and nav links */
    src = src.replaceAll("{ title }", frontmatter.title);
    src = src.replaceAll("{ description }", frontmatter.description);
    const links_path = frontmatter.links.replaceAll(".", "-") + "_links.html";
    let links_content = Deno.readTextFileSync(`.${slash}links${slash}${links_path}`);

    const match = links_content.match(/\<li\>\<a href="(.*?)"\>(.*?)\<\/a\>\<\/li\>/gmis);
    const active_path = frontmatter.active.split("/");
    match?.forEach(match => {
      for(const path of active_path){
        if(match.includes(">" + path + "<")) {
          links_content = links_content.replace(match, `<i>${match}</i>`);
        }
      }
    })
    
    src = src.replaceAll("{ links }", links_content);

    src = src.replaceAll("{ source link }", `https://git.sr.ht/~jordanreger/com/tree/main/item/site/${file}`);

    src = src.replaceAll("{ date }", get0x7d0date());
  } else {
    src = src.replaceAll(frontmatter, "");
    frontmatter = frontmatter?.replaceAll("---", "");
  }
  
  return src;
}

getFiles(`site`).forEach(file => {
  if(!file.includes("robots.txt") && !file.includes("key.asc")) {
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