import React, {useState} from 'react';
import css from './Home.scss';
import {useTrail} from "react-spring";

interface Props {}

const words = [
  'Sustainability',
];

const Home: React.FC<Props> = () => {
  const [currentIdx, setIdx] = useState(0);
  const text = words[currentIdx].split(' ').map((value, idx) => ({ key: idx, value }));
  const trail = useTrail(words[currentIdx].length, {
    from: { transform: 'translate3d(0,-20px,0)', opacity: 0 },
    to: { transform: 'translate3d(0,0px,0)', opacity: 1 }
  });
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
