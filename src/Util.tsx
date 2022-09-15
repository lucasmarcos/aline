export const Article = ({ children }) => {
  return (
    <div>
      <article>
        {children}
      </article>
    </div>
  );
};

export const P = ({ children }) => {
  return (
    <div>
      <p>
        {children}
      </p>
    </div>
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
