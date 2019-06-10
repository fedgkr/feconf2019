import React from 'react';
import Head from 'next/head';
import css from './Home.scss';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <Head>
        <meta http-equiv="refresh" content="0; url=https://2019.feconf.kr/cfs"/>
      </Head>
    </div>
  );
}

export default Home;
