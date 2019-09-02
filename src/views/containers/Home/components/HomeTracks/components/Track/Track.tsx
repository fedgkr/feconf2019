import React from 'react';
import css from './Track.scss';
import TrackItem from "../TrackItem/TrackItem";
import {Speaker} from "../../../../../../../shared/interfaces";

interface TrackProps {
  title: string;
  isMain: boolean;
  speakers: Speaker[];
}

const Track: React.FC<TrackProps> = ({ title, isMain, speakers }) => {
  return (
    <div className={css.Track}>
      <div className={css.Title}>
        {title}
      </div>
      <div className={css.TimeTable}>
        {speakers.map(s => <TrackItem isMain={isMain} speaker={s} key={s.nameEn}/>)}
      </div>
    </div>
  );
}

export default Track;
