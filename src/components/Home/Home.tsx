import React from 'react';
import css from './Home.scss';
import Hero from "../Hero/Hero";
import History from "../History/History";
import Sponsor from "../Sponsor/Sponsor"
import Footer from "../Footer/Footer"

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <Hero/>
      <History/>
      <Sponsor/>
      <Footer/>
    </div>
  );
}

export default Home;
