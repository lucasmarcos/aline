export const Template = ({ title, children }) => (
  <html lang="pt">
    <head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="out.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans&family=IBM+Plex+Sans&display=swap"
      />
    </head>
    <body>{children}</body>
  </html>
);
