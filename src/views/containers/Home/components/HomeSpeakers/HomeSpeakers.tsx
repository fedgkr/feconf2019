import React from 'react';
import cc from 'classcat';
import css from './HomeSpeakers.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import SpeakerBrief from "../../../SpeakersPage/components/SpeakerBrief/SpeakerBrief";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import {speakers} from "../../../../../shared/data";

interface HomeSpeakersProps {
}

const HomeSpeakers: React.FC<HomeSpeakersProps> = () => {
  return (
    <div className={cc(['container', css.HomeSpeakers])}>
      <TitleHero title="2019" subTitle="16 Speakers"/>
      <div className={css.SpeakerList}>
        <SpeakerBrief speaker={speakers[0]}/>
        <SpeakerBrief speaker={speakers[1]}/>
        <SpeakerBrief speaker={speakers[2]}/>
        <SpeakerBrief speaker={speakers[3]}/>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="스피커 모두 보기"
          filled={false}
          onClick={() => {

          }}
        />
      </div>
    </div>
  );
}

export default HomeSpeakers;
