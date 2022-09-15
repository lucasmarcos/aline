import { renderToStaticMarkup } from "react-dom/server";

import { Template } from "./Template.js";
import { Index } from "./Index.js";
import { Alegria } from "./Alegria.js";

import { writeFile} from "fs";

const page = (child) => renderToStaticMarkup(
	Template({ title: "Alegria", children: child() })
);

writeFile("site/index.html", `<!doctype html>${page(Index)}`, () => {});
writeFile("site/alegria.html", `<!doctype html>${page(Alegria)}`, () => {});
