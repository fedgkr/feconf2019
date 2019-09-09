import App from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import React from 'react';
import 'core-js/es/object/assign';
import '../styles/style.scss';
import Header from "../views/components/Header/Header";
import {useModalApi} from "../shared/store";
import ModalPortal from "../views/components/modal/ModalPortal/ModalPortal";

if (typeof window === 'object') {
  require('intersection-observer');
}

class FEConf2019 extends App {
  public props: any;

  componentDidMount() {
    Router.events.on('routeChangeStart', () => {
      useModalApi.setState({ modalOpened: false });
    });
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>FEConf 2019</title>
          <meta
            name="description"
            content="2019 FEConf Korea 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 세번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."
          />
          <meta
            name="keywords"
            content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,롯데타워,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul,Lotte"
          />
          <meta property="og:url" content="https://2019.feconf.kr/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="2019 FEConf Korea" />
          <meta
            property="og:description"
            content="FEConf 2019 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 세번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."
          />
          <meta property="og:image" content="https://fedgkr.github.io/feconf2019/static/images/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="2019 FEConf Korea" />
          <meta
            name="twitter:description"
            content="FEConf 2019 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 세번째 열리는 FEConf! 많은 관심과 성원 부탁드립니다."
          />
          <meta name="twitter:creator" content="@codemilli" />
          <meta name="twitter:image" content="https://fedgkr.github.io/feconf2019/static/images/og-image.png" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" href="/static/images/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-68676515-5"/>
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-68676515-5');
          ` }}/>
        </Head>
        <div className="wrap">
          <Header/>
          <Component {...pageProps}/>
          <ModalPortal/>
        </div>
        <div id="modal"/>
      </>
    );
  }
}

export default FEConf2019;
