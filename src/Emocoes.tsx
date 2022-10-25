import { BG_PRETO, CinzaEscuro } from "./cores.js";
import { FonteTitulo } from "./fontes.js";

const URLS = {
  Alegria: "alegria.html",
  Medo: "medo.html",
  Tristeza: "tristeza.html",
  Nojo: "nojo.html",
  Raiva: "raiva.html",
};

const Emocao = ({ className, nome, emoji }) => (
  <a href={URLS[nome]}>
    <div className={`${className} p-7`}>
      <div
        className={`text-center text-3xl ${FonteTitulo}`}
        style={{ textShadow: `0.1rem 0.1rem 0.3rem #${CinzaEscuro}` }}
      >
        {nome}
      </div>
      <div
        className="text-center text-7xl p-3"
        style={{ textShadow: `0.1rem 0.1rem 0.3rem #${CinzaEscuro}` }}
      >
        {emoji}
      </div>
    </div>
  </a>
);

export const Emocoes = () => (
  <div className={`flex align-center justify-center  flex-col md:flex-row`}>
    <Emocao className="bg-yellow-300" nome="Alegria" emoji="😊" />
    <Emocao className="bg-red-500" nome="Raiva" emoji="😠" />
    <Emocao className="bg-black text-white" nome="Medo" emoji="😨" />
    <Emocao className="bg-green-500" nome="Nojo" emoji="🤢" />
    <Emocao className="bg-blue-500" nome="Tristeza" emoji="😟" />
  </div>
);
