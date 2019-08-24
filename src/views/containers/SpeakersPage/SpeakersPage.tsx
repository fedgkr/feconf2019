import React from 'react';
import css from './SpeakersPage.scss';
import SpeakerBrief from "./components/SpeakerBrief/SpeakerBrief";

interface SpeakersPageProps {
}

const SpeakersPage: React.FC<SpeakersPageProps> = () => {
  return (
    <div className={css.SpeakersPage}>
      <div className={css.TitleWrap}>
        <h3 className={css.Year}>2019</h3>
        <h3 className={css.Title}>Speakers</h3>
      </div>
      <div className={css.SpeakerList}>
        <SpeakerBrief/>
      </div>
    </div>
  );
}

export default SpeakersPage;
