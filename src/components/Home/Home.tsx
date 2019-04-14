import React, { useEffect, useState } from 'react';
import css from './Home.scss';
import Hero from "../Hero/Hero";
import History from "../History/History";
import Sponsor from "../Sponsor/Sponsor"
import Footer from "../Footer/Footer"

interface Props {}

const useAnimate = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const to = setTimeout(() => setAnimate(true), 2400);
    return () => {
      clearTimeout(to);
    };
  }, []);
  return animate;
}

const Home: React.FC<Props> = () => {
  const animate = useAnimate();
  return (
    <div className={`${css.Home} ${animate ? css.animate : ''}`}>
      <Hero/>
      <History/>
      <Sponsor/>
      <Footer/>
    </div>
  );
}

export default Home;
