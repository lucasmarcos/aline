export const Template = ({ children }) => {
  const title = "placeholder";

  return (
    <html lang="pt">
      <head>
        <title>{title}</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="out.css"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};
