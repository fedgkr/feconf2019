import React from 'react';
import cc from 'classcat';
import css from './SchedulePage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import Track from "../Home/components/HomeTracks/components/Track/Track";
import {getSpeakers} from "../../../shared/data";
import {TrackType} from "../../../shared/interfaces";

interface SchedulePageProps {
}

const trackASpeakers = getSpeakers(TrackType.A);
const trackBSpeakers = getSpeakers(TrackType.B);

const SchedulePage: React.FC<SchedulePageProps> = () => {
  return (
    <div className={cc(['container', css.SchedulePage])}>
      <TitleHero title="2 Tracks" subTitle="16 Talks"/>
      <p className={css.Date}>
        2019년 10월 26일 토요일, 10AM - 5PM
      </p>
      <div className={css.TrackWrap}>
        <Track title="Track 1" isMain={true} isFold={false} speakers={trackASpeakers}/>
        <Track title="Track 2" isMain={false} isFold={false} speakers={trackBSpeakers}/>
      </div>
    </div>
  );
}

export default SchedulePage;
