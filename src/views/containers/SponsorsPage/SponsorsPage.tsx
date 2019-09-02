import React from 'react';
import cc from 'classcat';
import css from './SponsorsPage.scss';
import {speakers} from "../../../shared/data";
import SpeakerBrief from "../SpeakersPage/components/SpeakerBrief/SpeakerBrief";
import TitleHero from "../../components/TitleHero/TitleHero";

interface SponsorsPageProps {
}

const SponsorsPage: React.FC<SponsorsPageProps> = () => {
  return (
    <div className={cc(['container', css.SponsorsPage])}>
      <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
      <div className={css.SponsorList}>
        <SpeakerBrief key={speakers[0].nameEn} speaker={speakers[0]}/>
        <SpeakerBrief key={speakers[1].nameEn} speaker={speakers[1]}/>
        <SpeakerBrief key={speakers[2].nameEn} speaker={speakers[2]}/>
        <SpeakerBrief key={speakers[3].nameEn} speaker={speakers[3]}/>
      </div>
    </div>
  );
}

export default SponsorsPage;
