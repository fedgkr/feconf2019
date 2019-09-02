import React from 'react';
import css from './SpeakersPage.scss';
import SpeakerBrief from "./components/SpeakerBrief/SpeakerBrief";
import TitleHero from "../../components/TitleHero/TitleHero";
import {speakers} from "../../../shared/data";
import cc from "classcat";

interface SpeakersPageProps {
}

const SpeakersPage: React.FC<SpeakersPageProps> = () => {
  return (
    <div className={cc(['container', css.SpeakersPage])}>
      <TitleHero title="2019" subTitle="Speakers" />
      <div className={css.SpeakerList}>
        <SpeakerBrief key={speakers[0].nameEn} speaker={speakers[0]}/>
        <SpeakerBrief key={speakers[1].nameEn} speaker={speakers[1]}/>
        <SpeakerBrief key={speakers[2].nameEn} speaker={speakers[2]}/>
        <SpeakerBrief key={speakers[3].nameEn} speaker={speakers[3]}/>
      </div>
    </div>
  );
}

export default SpeakersPage;
