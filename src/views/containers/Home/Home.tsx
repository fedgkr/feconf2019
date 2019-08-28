import React from 'react';
import css from './Home.scss';
import Hero from "./Hero/Hero";
import HomeSpeakers from "./HomeSpeakers/HomeSpeakers";
import HomeTracks from "./HomeTracks/HomeTracks";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <Hero/>
      <HomeSpeakers/>
      <HomeTracks/>
    </div>
  );
}

export default Home;
