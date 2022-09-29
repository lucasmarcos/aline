export const Article = ({ children }) => <article>{children}</article>;

export const ArticleHeader = ({ className, title, subtitle }) => (
  <div className={className}>
    <div className="text-center p-7">
      <h1 className="text-7xl p-1">{title}</h1>
      <h2 className="text-4xl p-1">{subtitle}</h2>
    </div>
  </div>
);

export const P = ({ children }) => <p className="py-1 text-lg">{children}</p>;

export const Refs = ({ children }) => (
  <div>
    <p>Referências</p>
    {children}
  </div>
);

export const Content = ({ children }) => (
  <main className="py-6 mx-auto max-w-lg">{children}</main>
);

export const Bloco = ({ children }) => (
  <div className="flex align-center justify-space-between py-5">
    <div className="flex-3">{children}</div>
    <div className="flex-1 w-20 h-20 bg-black"></div>
  </div>
);

export const BlocoDireta = ({ children }) => <Bloco>{children}</Bloco>;
export const BlocoEsquerda = ({ children }) => <Bloco>{children}</Bloco>;
