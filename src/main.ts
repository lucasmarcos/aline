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
import { Home } from "./Home.js";

import { writeFile } from "fs";

const page = (title, child) =>
  `<!doctype html>${renderToStaticMarkup(
    Template({ title: title, children: child() })
  )}`;

const writePage = (file, title, content) => {
  writeFile(`./site/${file}`, page(title, content), () => {});
};

writePage("home.html", "Bem-vindo", Index);
writePage("alegria.html", "Alegria", Alegria);
writePage("definicao.html", "Definições", Definicao);
writePage("final.html", "Parte final", Final);
writePage("medo.html", "Medo", Medo);
writePage("nojo.html", "Nojo", Nojo);
writePage("raiva.html", "Raiva", Raiva);
writePage("social.html", "Habilidades sociais", Social);
writePage("tristeza.html", "Tristeza", Tristeza);
writePage("index.html", "Home", Home);

console.log("built");
