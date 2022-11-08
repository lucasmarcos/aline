import { BG_ROXO } from "./cores.js";
import { FonteTitulo, FonteSubtitulo } from "./fontes.js";

const EstiloHover = "hover:bg-white hover:text-black hover:font-bold px-3";

const Emocs = () => (
  <div>
    <div className={`text-white`}>
      <button id="colapso">NOSSAS EMOÇÕES ▼</button>
    </div>
    <ul id="colapsar" className={`${FonteSubtitulo} text-xl colapsar`}>
      <li className={`${EstiloHover} bg-yellow-300`}>
        <a href="alegria.html">ALEGRIA</a>
      </li>
      <li className={`${EstiloHover} bg-red-500`}>
        <a href="raiva.html">RAIVA</a>
      </li>
      <li className={`${EstiloHover} bg-orange-500`}>
        <a href="medo.html">MEDO</a>
      </li>
      <li className={`${EstiloHover} bg-green-500`}>
        <a href="nojo.html">NOJO</a>
      </li>
      <li className={`${EstiloHover} bg-blue-500`}>
        <a href="tristeza.html">TRISTEZA</a>
      </li>
    </ul>
  </div>
);

const Refs = () => (
  <div>
    <div className={`${EstiloHover} text-white`}>
      <a href="refs.html">REFERÊNCIAS</a>
    </div>
  </div>
);

const Equipe = () => (
  <div>
    <div className={`${EstiloHover} text-white`}>
      <a href="equipe.html">EQUIPE</a>
    </div>
  </div>
);

const Inicio = () => (
  <div>
    <div className={`${EstiloHover} text-white`}>
      <a href="/">INICIO</a>
    </div>
  </div>
);

const Resumo = () => (
  <div>
    <div className={`${EstiloHover} text-white`}>
      <a href="final.html">RESUMO</a>
    </div>
  </div>
);

export const Menu = () => (
  <div
    className={`${BG_ROXO} container mx-auto py-3 text-2xl flex flex-row align-center justify-around ${FonteTitulo}`}
  >
    <Inicio />
    <Emocs />
    <Refs />
    <Resumo />
  </div>
);
