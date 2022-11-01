import { FonteTitulo, FonteSubtitulo } from "./fontes.js";

const EstiloHover = "hover:bg-white hover:text-black hover:font-bold";

const Sobre = () => (
  <div>
    <div className={`text-white`}>
      <button id="colapso_1">SOBRE ▼</button>
    </div>
    <ul
      id="colapsar_1"
      className={`${FonteSubtitulo} text-xl text-white colapsar`}
    >
      <li className={`${EstiloHover} px-3`}>
        <a href="/">HOME</a>
      </li>
      <li className={`${EstiloHover} px-3`}>
        <a href="inicio.html">INICIO</a>
      </li>
      <li className={`${EstiloHover} px-3`}>
        <a href="definicao.html">DEFINICOES</a>
      </li>
      <li className={`${EstiloHover} px-3`}>
        <a href="final.html">FINAL</a>
      </li>
    </ul>
  </div>
);

const Emocs = () => (
  <div>
    <div className={`text-white`}>
      <button id="colapso_2">NOSSAS EMOÇÕES ▼</button>
    </div>
    <ul id="colapsar_2" className={`${FonteSubtitulo} text-xl colapsar`}>
      <li className={`${EstiloHover} px-3 bg-yellow-300`}>
        <a href="alegria.html">ALEGRIA</a>
      </li>
      <li className={`${EstiloHover} px-3 bg-red-500`}>
        <a href="raiva.html">RAIVA</a>
      </li>
      <li className={`${EstiloHover} px-3 bg-orange-500`}>
        <a href="medo.html">MEDO</a>
      </li>
      <li className={`${EstiloHover} px-3 bg-green-500`}>
        <a href="nojo.html">NOJO</a>
      </li>
      <li className={`${EstiloHover} px-3 bg-blue-500`}>
        <a href="tristeza.html">TRISTEZA</a>
      </li>
    </ul>
  </div>
);

const Refs = () => (
  <div>
    <div className={`${EstiloHover} px-3 text-white`}>
      <a href="refs.html">REFERÊNCIAS</a>
    </div>
  </div>
);

const Equipe = () => (
  <div>
    <div className={`${EstiloHover} px-3 text-white`}>
      <a href="equipe.html">EQUIPE</a>
    </div>
  </div>
);

export const Menu = () => (
  <div
    className={`container mx-auto py-3 bg-black text-2xl flex flex-row align-center justify-around ${FonteTitulo}`}
  >
    <Sobre />
    <Emocs />
    <Refs />
    <Equipe />
  </div>
);
