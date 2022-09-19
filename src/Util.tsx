export const Article = ({ children }) => {
  return (
    <article>
      {children}
    </article>
  );
};

export const ArticleHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center p-7">
      <h1 className="text-7xl p-1">{title}</h1>
      <h2 className="text-4xl p-1">{subtitle}</h2>
    </div>
  );
};

export const P = ({ children }) => {
  return (
    <p className="p-1">
      {children}
    </p>
  );
};

export const Refs = ({ children }) => {
  return (
    <div>
      <p>REFERÊNCIAS</p>
      {children}
    </div>
  );
};

export const Content = ({ children }) => {
  return (
    <main className="container mx-auto">
      {children}
    </main>
  );
};
