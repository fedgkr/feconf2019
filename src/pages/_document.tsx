import Document, { Head, Main, NextDocumentContext, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <link href="https://fonts.googleapis.com/css?family=Jua" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
