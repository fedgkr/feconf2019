import React from 'react';
import css from './Home.scss';
import Hero from "./Hero/Hero";
import HomeSpeakers from "./HomeSpeakers/HomeSpeakers";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <Hero/>
      <HomeSpeakers/>
    </div>
  );
}

export default Home;
