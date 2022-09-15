import { createElement } from "react";

export const Home = ({ title = "Bem-vindo", Comp }) => {
  const content = Comp ? <Comp/> : "Bem-vindo";
  return (
    <html lang="pt">
      <head>
        <title>{title}</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="stylesheet" href="out.css"/>
      </head>
      <body>
	<div className="container">
          {content}
	</div>
      </body>
    </html>
  );
};
