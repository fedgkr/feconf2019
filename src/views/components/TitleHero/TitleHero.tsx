import React from 'react';
import css from './TitleHero.scss';
import {animated, useSpring} from "react-spring";

interface TitleHeroProps {
  title: string
  subTitle: string
}

const TitleHero: React.FC<TitleHeroProps> = ({
  title = '',
  subTitle = '',
}) => {
  const titleAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(-40px)',
    },
  });
  const subAnimation = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(-40px)',
    },
    delay: 200,
  });
  return (
    <div className={css.TitleHero}>
      <animated.h3 style={titleAnimation} className={css.Title}>{title}</animated.h3>
      <animated.h3 style={subAnimation} className={css.SubTitle}>{subTitle}</animated.h3>
    </div>
  );
}

export default TitleHero;
