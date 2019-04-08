import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'normalize.css';
import 'styles/style.scss';
import 'core-js/es/object/assign';

if (typeof window === 'object') {
  require('intersection-observer');
}

class FEConf2019 extends App {
  public props: any;

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>FEConf 2019</title>
          <meta name="description" content="" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default FEConf2019;
