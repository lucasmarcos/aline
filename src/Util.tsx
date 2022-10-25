import { createContext } from "react";
import { CinzaClaro } from "./cores.js";

import { FonteSubtitulo, FonteTexto, FonteTitulo } from "./fontes.js";

export const ColorContext = createContext("color");

export const Article = ({ children }) => (
  <>
    <Voltar />
    <article>{children}</article>
    <Creditos />
  </>
);

export const ArticleHeader = ({ title, subtitle }) => (
  <ColorContext.Consumer>
    {(ctx) => (
      <div className={`${ctx} ${ctx === "bg-black" ? "text-white" : ""}`}>
        <div className="text-center p-7">
          <h1
            className={`text-7xl py-1 ${FonteTitulo}`}
            style={{ textShadow: `0.1rem 0.1rem 0.1rem #${CinzaClaro}` }}
          >
            {title}
          </h1>
          <h2
            className={`text-4xl py-1 ${FonteSubtitulo}`}
            style={{
              fontFamily: "DM Sans",
              textShadow: `0.1rem 0.1rem 0.1rem #${CinzaClaro}`,
            }}
          >
            {subtitle}
          </h2>
        </div>
      </div>
    )}
  </ColorContext.Consumer>
);

export const P = ({ children }) => (
  <p className={`py-1 ${FonteTexto}`}>{children}</p>
);

export const Refs = ({ children }) => (
  <div className="mx-auto max-w-lg py-3">
    <div className="text-center text-xl py-3">Referências</div>
    {children}
  </div>
);

export const Referencia = ({
  livro,
  autor,
  editora,
  lancamento,
  local,
  link = "",
}) => (
  <div className="py-3">
    <div>
      {autor}, {livro}.
    </div>
    <div>
      {local}, {editora}, {lancamento}.
    </div>
    <a href={link}>{link}</a>
  </div>
);

export const Content = ({ children }) => (
  <main className="py-6 mx-auto">{children}</main>
);

const ColorRectangle = () => (
  <ColorContext.Consumer>
    {(ctx) => <div className={`flex-1 m-3 ${ctx}`}></div>}
  </ColorContext.Consumer>
);

const Bloco = ({ before = false, children }) => (
  <div className="flex align-center justify-between py-5 max-w-xl text-lg mx-auto">
    {before ? <ColorRectangle /> : null}
    <div className="flex-3 max-w-lg">{children}</div>
    {!before ? <ColorRectangle /> : null}
  </div>
);

export const Centro = ({ children }) => (
  <div
    className={`text-2xl py-3 max-w-xl mx-auto text-center ${FonteSubtitulo}`}
  >
    {children}
  </div>
);

export const BlocoDireita = ({ children }) => <Bloco before>{children}</Bloco>;
export const BlocoEsquerda = ({ children }) => <Bloco>{children}</Bloco>;

export const Citacao = ({ atribuicao = "", children }) => (
  <blockquote>
    <div className="mx-auto max-w-xl text-3xl text-bold py-3">
      "{children}". {atribuicao != "" ? `(${atribuicao}).` : null}
    </div>
  </blockquote>
);

export const Creditos = () => (
  <div
    className={`bg-black text-white py-5 text-lg flex flex-row ${FonteSubtitulo}`}
    style={{ justifyContent: "space-around", fontFamily: "DM Sans" }}
  >
    <div>
      <P>Projeto Psicoeducação na Universidade</P>
      <P> COGERH/NUAPE - Campus Dois Vizinhos</P>
    </div>
    <div>
      <P>Aline Anacleto Marchesan CRP 08/14785</P>
      <P>Danieli Ghedin Sartori CRP 08/14368</P>
    </div>
  </div>
);

const CallToAction = () => (
  <P>
    Se você gostou e quer aprender mais, fique atento, todo dia 07 e 17 de cada
    mês publicaremos textos que serão veiculados pelos principais meios de
    comunicação do Campus.
  </P>
);

export const Voltar = () => (
  <div>
    <a href="/">Voltar</a>
  </div>
);
