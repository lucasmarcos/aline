import { FonteTitulo, FonteSubtitulo } from "./fontes.js";

const EstiloHover = "hover:bg-white hover:text-black hover:font-bold";

const Sobre = () => (
  <div>
    <div className={`text-white`}>
      <button>SOBRE ▼</button>
    </div>
    <ul className={`${FonteSubtitulo} text-xl text-white`}>
      <li className={EstiloHover}>
        <a href="/">INICIO</a>
      </li>
      <li className={EstiloHover}>
        <a href="definicao.html">DEFINICOES</a>
      </li>
      <li className={EstiloHover}>
        <a href="final.html">FINAL</a>
      </li>
    </ul>
  </div>
);

const Emocs = () => (
  <div>
    <div className={`text-white`}>
      <button>NOSSAS EMOÇÕES ▼</button>
    </div>
    <ul className={`${FonteSubtitulo} text-center text-xl`}>
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
      <a href="">REFERÊNCIAS</a>
    </div>
  </div>
);

const Equipe = () => (
  <div>
    <div className={`${EstiloHover} text-white`}>
      <a href="">EQUIPE</a>
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
