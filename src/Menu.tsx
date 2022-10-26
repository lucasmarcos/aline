const EstiloHover = "hover:bg-white hover:text-black menu";

const Sobre = () => (
  <div className={EstiloHover}>
    <button>SOBRE</button>
    <ul className="menuItem" style={{ display: "none" }}>
      <li>
        <a href="definicao.html">DEFINICOES</a>
      </li>
      <li>
        <a href="final.html">FINAL</a>
      </li>
    </ul>
  </div>
);

const Emocs = () => (
  <div className={EstiloHover}>
    <button>NOSSAS EMOÇÕES</button>
    <ul className="menuItem" style={{ display: "none" }}>
      <li>
        <a href=""></a>
      </li>
    </ul>
  </div>
);

const Refs = () => (
  <div className={EstiloHover}>
    <a href="">REFERÊNCIAS</a>
  </div>
);

const Equipe = () => (
  <div className={EstiloHover}>
    <a href="">EQUIPE</a>
  </div>
);

export const Menu = () => (
  <div className="py-3 bg-black text-white text-xl flex flex-row align-center justify-around">
    <Sobre />
    <Emocs />
    <Refs />
    <Equipe />
  </div>
);
