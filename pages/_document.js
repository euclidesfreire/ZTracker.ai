import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from '../src/theme';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="shortcut icon"
            href={require("assets/img/brand/favicon.ico")}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/brand/apple-icon.png")}
          />
          {/* Fonts and icons */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
