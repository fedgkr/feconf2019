import React from 'react';
import css from './HomeSpeakers.scss';
import TitleHero from "../../../components/TitleHero/TitleHero";
import SpeakerBrief from "../../SpeakersPage/components/SpeakerBrief/SpeakerBrief";
import HoverButton from "../../../components/HoverButton/HoverButton";

interface HomeSpeakersProps {
}

const HomeSpeakers: React.FC<HomeSpeakersProps> = () => {
  return (
    <div className={css.HomeSpeakers}>
      <TitleHero title="2019" subTitle="16 Speakers"/>
      <div className={css.SpeakerList}>
        <SpeakerBrief/>
        <SpeakerBrief/>
        <SpeakerBrief/>
        <SpeakerBrief/>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="스피커 모두 보기"
          filled={false}
        />
      </div>
    </div>
  );
}

export default HomeSpeakers;
