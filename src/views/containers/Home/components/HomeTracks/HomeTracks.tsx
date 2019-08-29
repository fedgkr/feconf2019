import React from 'react';
import css from './HomeTracks.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";

interface HomeTracksProps {
}

const HomeTracks: React.FC<HomeTracksProps> = () => {
  return (
    <div className={css.HomeTracks}>
      <TitleHero title="2 Tracks" subTitle="16 Talks"/>
      <p className={css.Date}>
        2019년 10월 26일 토요일, 10AM - 5PM
      </p>
    </div>
  );
}

export default HomeTracks;
