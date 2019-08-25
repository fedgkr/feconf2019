import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'core-js/es/object/assign';
import '../styles/style.scss';
import Header from "../views/components/Header/Header";

if (typeof window === 'object') {
  require('intersection-observer');
}

class FEConf2019 extends App {
  public props: any;

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>FEConf 2019</title>
          <meta name="description" content="" />
          <meta http-equiv="refresh" content="0; url=https://2019.feconf.kr/cfs"/>
        </Head>
        <div className="wrap">
          <Header/>
          <Component {...pageProps}/>
        </div>
      </>
    );
  }
}

export default FEConf2019;
