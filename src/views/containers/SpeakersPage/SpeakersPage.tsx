import React from 'react';
import css from './SpeakersPage.scss';
import SpeakerBrief from "./components/SpeakerBrief/SpeakerBrief";
import TitleHero from "../../components/TitleHero/TitleHero";

interface SpeakersPageProps {
}

const SpeakersPage: React.FC<SpeakersPageProps> = () => {
  return (
    <div className={css.SpeakersPage}>
      <TitleHero title="2019" subTitle="Speakers" />
      <div className={css.SpeakerList}>
        <SpeakerBrief/>
      </div>
    </div>
  );
}

export default SpeakersPage;
