import React from 'react';
import css from './Track.scss';
import TrackItem from "../TrackItem/TrackItem";
import {Speaker} from "../../../../../../../shared/interfaces";

interface TrackProps {
  title: string;
  isMain: boolean;
  isFold: boolean;
  speakers: Speaker[];
}

const Track: React.FC<TrackProps> = ({ title, isMain, isFold, speakers }) => {
  const spliced = [...speakers].splice(0, 3);
  return (
    <div className={css.Track}>
      <div className={css.Title}>
        {title}
      </div>
      <div className={css.TimeTable}>
        {(isFold ? spliced : speakers).map(s => <TrackItem isMain={isMain} speaker={s} key={s.nameEn}/>)}
      </div>
    </div>
  );
}

export default Track;
