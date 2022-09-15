import { renderToStaticMarkup } from "react-dom/server";

import { Template } from "./Template.js";

import { Index } from "./Index.js";
import { Alegria } from "./Alegria.js";
import { Definicao } from "./Definicao.js";
import { Final } from "./Final.js";
import { Medo } from "./Medo.js";
import { Nojo } from "./Nojo.js";
import { Raiva } from "./Raiva.js";
import { Social } from "./Social.js";
import { Tristeza } from "./Tristeza.js";

import { writeFile} from "fs";

const page = (child) =>
  `<!doctype html>${
    renderToStaticMarkup(
	    Template({ children: child() })
    )
  }`;

const writePage = (file, content) => {
  writeFile(`./site/${file}`, page(content), () => {});
};

writePage("index.html", Index);
writePage("alegria.html", Alegria);
writePage("definicao.html", Definicao);
writePage("final.html", Final);
writePage("medo.html", Medo);
writePage("nojo.html", Nojo);
writePage("raiva.html", Raiva);
writePage("social.html", Social);
writePage("tristeza.html", Tristeza);
