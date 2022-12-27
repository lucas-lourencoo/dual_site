import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/logo.png" type="image/png" />
          <meta name="title" content="Dual | Serviços Terceirizados" />
          <meta
            name="description"
            content="Os mais preparados e especializados de Campo Grande, você encontra
              aqui."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://dualservicosterceirizados.com.br/"
          />
          <meta property="og:title" content="Dual | Serviços Terceirizados" />
          <meta
            property="og:description"
            content="Os mais preparados e especializados de Campo Grande, você encontra
              aqui."
          />
          <meta property="og:image" content="/logo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://dualservicosterceirizados.com.br/"
          />
          <meta
            property="twitter:title"
            content="Dual | Serviços Terceirizados"
          />
          <meta
            property="twitter:description"
            content="Os mais preparados e especializados de Campo Grande, você encontra
              aqui."
          />
          <meta property="twitter:image" content="/logo.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Open+Sans:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
