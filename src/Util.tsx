import { createContext } from "react";

export const Article = ({ children }) => <article>{children}</article>;

export const ArticleHeader = ({ className, title, subtitle }) => (
  <div className={className}>
    <div className="text-center p-7">
      <h1 className="text-7xl py-1">{title}</h1>
      <h2 className="text-4xl py-1">{subtitle}</h2>
    </div>
  </div>
);

export const P = ({ children }) => <p className="py-1">{children}</p>;

export const Refs = ({ children }) => (
  <div>
    <p>Referências</p>
    {children}
  </div>
);

export const Content = ({ children }) => (
  <main className="py-6 mx-auto">{children}</main>
);

export const ColorContext = createContext("color");

const BlackCube = () => (
  <ColorContext.Consumer>
    {(ctx) => <div className={`flex-1 m-3 ${ctx}`}></div>}
  </ColorContext.Consumer>
);

const Bloco = ({ before = false, children }) => (
  <div className="flex align-center justify-space-between py-5 max-w-xl text-lg mx-auto">
    {before ? <BlackCube /> : null}
    <div className="flex-3 max-w-lg">{children}</div>
    {!before ? <BlackCube /> : null}
  </div>
);

export const Centro = ({ children }) => (
  <div className="text-2xl py-3 max-w-xl mx-auto text-center">{children}</div>
);

export const BlocoDireta = ({ children }) => <Bloco before>{children}</Bloco>;
export const BlocoEsquerda = ({ children }) => <Bloco>{children}</Bloco>;

export const Citacao = ({ atribuicao = "", children }) => (
  <blockquote>
    <div className="mx-auto max-w-xl text-3xl text-bold py-3">
      "{children}". {atribuicao != "" ? `(${atribuicao}).` : null}
    </div>
  </blockquote>
);
