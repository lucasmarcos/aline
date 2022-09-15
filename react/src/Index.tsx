const Link = ({ page, children }) => {
  return (
    <p>
      <a className="underline text-xl" href={page}>{children}</a>
    </p>
  );
};

export const Index = () => {
  return (
    <div>
      <Link page="definicao.html">Emoções, difinições e conceitos</Link>
      <Link page="social.html">Habilidades sociais</Link>
      <Link page="final.html">Emoções, parte final</Link>
      <Link page="alegria.html">Alegria</Link>
      <Link page="medo.html">Medo</Link>
      <Link page="nojo.html">Nojo</Link>
      <Link page="raiva.html">Raiva</Link>
      <Link page="tristeza.html">Tristeza</Link>
    </div>
  );
};
