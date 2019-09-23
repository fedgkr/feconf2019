import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  public static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,700i&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          /** Thanks to Ko */
        </body>
      </html>
    );
  }
}
