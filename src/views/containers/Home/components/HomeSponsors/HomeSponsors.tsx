import React from 'react';
import css from './HomeSponsors.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import SpeakerBrief from "../../../SpeakersPage/components/SpeakerBrief/SpeakerBrief";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import cc from "classcat";
import {speakers} from "../../../../../shared/data";

interface HomeSponsorsProps {
}

const HomeSponsors: React.FC<HomeSponsorsProps> = () => {
  return (
    <div className={cc(['container', css.HomeSponsors])}>
      <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
      <div className={css.SponsorList}>
        <SpeakerBrief speaker={speakers[0]}/>
        <SpeakerBrief speaker={speakers[1]}/>
        <SpeakerBrief speaker={speakers[2]}/>
        <SpeakerBrief speaker={speakers[3]}/>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="스폰서 모두 보기"
          filled={false}
        />
      </div>
    </div>
  );
}

export default HomeSponsors;
