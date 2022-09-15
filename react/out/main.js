import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Template } from "./Template.js";
import { Alegria } from "./Alegria.js";
//const page = renderToStaticMarkup(createElement(Home));
const page = renderToStaticMarkup(createElement(Template, { children: createElement(Alegria) }));
console.log(`<!doctype html>${page}`);
