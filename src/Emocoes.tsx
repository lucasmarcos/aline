import { CinzaEscuro } from "./cores.js";
import { FonteTitulo } from "./fontes.js";

export const Paginas = {
  alegria: {
    url: "alegria.html",
    bg: "bg-yellow-300",
    titulo: "ALEGRIA",
    emoji: "😊",
  },
  tristeza: {
    url: "tristeza.html",
    bg: "bg-blue-500",
    titulo: "TRISTEZA",
    emoji: "😟",
  },
  nojo: {
    url: "nojo.html",
    bg: "bg-green-500",
    titulo: "NOJO",
    emoji: "🤢",
  },
  raiva: {
    url: "raiva.html",
    bg: "bg-red-500",
    titulo: "RAIVA",
    emoji: "😠",
  },
  medo: {
    url: "medo.html",
    bg: "bg-orange-500",
    titulo: "MEDO",
    emoji: "😨",
  },
};

const Emocao = ({ pagina }) => (
  <a href={pagina.url}>
    <div className={`${pagina.bg} p-7`}>
      <div
        className={`text-center text-3xl ${FonteTitulo}`}
        style={{ textShadow: `0.1rem 0.1rem 0.3rem #${CinzaEscuro}` }}
      >
        {pagina.titulo}
      </div>
      <div
        className="text-center text-7xl p-3"
        style={{ textShadow: `0.1rem 0.1rem 0.3rem #${CinzaEscuro}` }}
      >
        {pagina.emoji}
      </div>
    </div>
  </a>
);

export const Emocoes = () => (
  <div className={`flex align-center justify-center flex-col md:flex-row`}>
    <Emocao pagina={Paginas.alegria} />
    <Emocao pagina={Paginas.raiva} />
    <Emocao pagina={Paginas.medo} />
    <Emocao pagina={Paginas.nojo} />
    <Emocao pagina={Paginas.tristeza} />
  </div>
);
