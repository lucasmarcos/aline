import { Logo } from "./Logo.js";

const Link = ({ page, color = "", children }) => {
  return (
    <div className={`p-3 ${color}`}>
      <a
        className={`underline text-xl ${
          color === "bg-black" ? "text-white" : ""
        }`}
        href={page}
      >
        {children}
      </a>
    </div>
  );
};

export const Index = () => {
  return (
    <div className="text-center">
      <Logo />
      <Link page="home.html">Home</Link>
      <Link page="definicao.html">Emoções, difinições e conceitos</Link>
      <Link page="social.html">Habilidades sociais</Link>
      <Link page="final.html">Emoções, parte final</Link>
      <Link page="alegria.html" color="bg-yellow-300">
        Alegria
      </Link>
      <Link page="medo.html" color="bg-black">
        Medo
      </Link>
      <Link page="nojo.html" color="bg-green-500">
        Nojo
      </Link>
      <Link page="raiva.html" color="bg-red-500">
        Raiva
      </Link>
      <Link page="tristeza.html" color="bg-blue-500">
        Tristeza
      </Link>
    </div>
  );
};
