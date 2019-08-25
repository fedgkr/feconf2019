import React from 'react';
import css from './TitleHero.scss';

interface TitleHeroProps {
  title: string
  subTitle: string
}

const TitleHero: React.FC<TitleHeroProps> = ({
  title = '',
  subTitle = '',
}) => {
  return (
    <div className={css.TitleHero}>
      <h3 className={css.Title}>{title}</h3>
      <h3 className={css.SubTitle}>{subTitle}</h3>
    </div>
  );
}

export default TitleHero;
