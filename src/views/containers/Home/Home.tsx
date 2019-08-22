import React from 'react';
import css from './Home.scss';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <div className={css.TextWrap}>
        <div className={css.Title}>
          <h3>FE Conference 2019</h3>
          <h3>is for</h3>
          <h2>Sustainability</h2>
        </div>

      </div>
      <div className={css.ImageWrap}>

      </div>
    </div>
  );
}

export default Home;
