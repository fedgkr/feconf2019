import React from 'react';
import css from './Home.scss';
import Hero from "./components/Hero/Hero";
import HomeSpeakers from "./components/HomeSpeakers/HomeSpeakers";
import HomeTracks from "./components/HomeTracks/HomeTracks";
import HomeSponsors from "./components/HomeSponsors/HomeSponsors";
import HomeInfo from "./components/HomeInfo/HomeInfo";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <Hero/>
      <HomeSpeakers/>
      <HomeTracks/>
      <HomeSponsors/>
      <HomeInfo/>
    </div>
  );
}

export default Home;
