import { renderToStaticMarkup } from "react-dom/server";

import { Template } from "./Template.js";

import { Alegria } from "./Alegria.js";
import { Definicao } from "./Definicao.js";
import { Final } from "./Final.js";
import { Medo } from "./Medo.js";
import { Nojo } from "./Nojo.js";
import { Raiva } from "./Raiva.js";
import { Social } from "./Social.js";
import { Tristeza } from "./Tristeza.js";
import { Inicio } from "./Inicio.js";
import { Referencias } from "./Refs.js";
import { Equipe } from "./Equipe.js";

import { writeFile } from "fs";

const page = (title, child) =>
  `<!doctype html>${renderToStaticMarkup(
    Template({ title: title, children: child() })
  )}`;

const writePage = (file, title, content) => {
  writeFile(`./site/${file}`, page(title, content), () => {});
};

writePage("index.html", "Inicio", Inicio);
writePage("alegria.html", "Alegria", Alegria);
writePage("definicao.html", "Definições", Definicao);
writePage("final.html", "Parte final", Final);
writePage("medo.html", "Medo", Medo);
writePage("nojo.html", "Nojo", Nojo);
writePage("raiva.html", "Raiva", Raiva);
writePage("social.html", "Habilidades sociais", Social);
writePage("tristeza.html", "Tristeza", Tristeza);
writePage("refs.html", "Refs", Referencias);
writePage("equipe.html", "Equipe", Equipe);

console.log("built");
