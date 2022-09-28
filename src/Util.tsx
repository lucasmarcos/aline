export const Article = ({ children }) => <article>{children}</article>;

export const ArticleHeader = ({ className, title, subtitle }) => (
  <div className={className}>
    <div className="text-center p-7">
      <h1 className="text-7xl p-1">{title}</h1>
      <h2 className="text-4xl p-1">{subtitle}</h2>
    </div>
  </div>
);

export const P = ({ children }) => <p className="p-1 text-lg">{children}</p>;

export const Refs = ({ children }) => (
  <div>
    <p>Referências</p>
    {children}
  </div>
);

export const Content = ({ children }) => (
  <main className="container py-6 mx-auto w-1/2">{children}</main>
);
