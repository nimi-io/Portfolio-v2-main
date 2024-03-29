import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Portfolio site for Ibukun-Odunsi Toluwanimi Software Engineer"
          />
          <meta
            name="author"
            content="Ibukun-Odunsi Toluwanimi, nimi.dev, nimi.github.io/Portfolio-v2, nimi.dev"
          />
          <meta
            name="keywords"
            content="Ibukun-Odunsi Toluwanimi Portfolio Web Designer developer Website software engineer Hire"
          />
          <meta
            property="og:title"
            content="Ibukun-Odunsi Toluwanimi - Software Engineer"
            key="title"
          />
          <title>Ibukun-Odunsi Toluwanimi - Software Engineer </title>
        </Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
