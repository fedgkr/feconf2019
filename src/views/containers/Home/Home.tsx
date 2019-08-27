import React from 'react';
import css from './Home.scss';
import Hero from "./Hero/Hero";

interface Props {}

const Home: React.FC<Props> = () => {

  return (
    <div className={css.Home}>
      <Hero/>
    </div>
  );
}

export default Home;
