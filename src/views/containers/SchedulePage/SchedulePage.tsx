import React, {useState} from 'react';
import cc from 'classcat';
import css from './SchedulePage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import Track from "../Home/components/HomeTracks/components/Track/Track";
import {getSpeakers, timeRange} from "../../../shared/data";
import {TrackType} from "../../../shared/interfaces";
import Footer from "../../components/Footer/Footer";

interface SchedulePageProps {
}

const trackASpeakers = getSpeakers(TrackType.A);
const trackBSpeakers = getSpeakers(TrackType.B);

const SchedulePage: React.FC<SchedulePageProps> = () => {
  const [selectedTrack, setSelectedTrack] = useState(1);
  return (
    <div className={cc(['container', css.SchedulePage])}>
      <TitleHero title="2 Tracks" subTitle="14 Talks"/>
      <p className={css.Date}>
        { timeRange }
      </p>
      <div className={css.TrackTitle}>
        <a
          className={selectedTrack === 1 ? css.selected : ''}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedTrack(1);
          }}
        >
          Track1
        </a>
        <a
          className={selectedTrack === 2 ? css.selected : ''}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedTrack(2);
          }}
        >
          Track2
        </a>
      </div>
      <div className={css.TrackWrap}>
        <Track title="Track 1" isMain={true} isFold={false} speakers={trackASpeakers} selected={selectedTrack === 1}/>
        <Track title="Track 2" isMain={false} isFold={false} speakers={trackBSpeakers} selected={selectedTrack === 2}/>
      </div>
      <Footer/>
    </div>
  );
}

export default SchedulePage;
