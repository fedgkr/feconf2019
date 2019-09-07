import React from 'react';
import cc from 'classcat';
import css from './SchedulePage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import {speakers, timeRange} from "../../../shared/data";
import Footer from "../../components/Footer/Footer";
import Tracks from "../../components/Tracks/Tracks";
import PreTrack from "../../components/PreTrack/PreTrack";

interface SchedulePageProps {
}

const SchedulePage: React.FC<SchedulePageProps> = () => {
  return (
    <div className={cc(['container', css.SchedulePage])}>
      <TitleHero title="2 Tracks" subTitle={`${speakers.length} Talks`}/>
      <p className={css.Date}>
        { timeRange }
      </p>
      <PreTrack/>
      <Tracks isFold={false}/>
      <Footer/>
    </div>
  );
}

export default SchedulePage;
