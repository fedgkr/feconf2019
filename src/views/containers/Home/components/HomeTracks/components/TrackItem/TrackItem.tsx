import React from 'react';
import cc from 'classcat';
import css from './TrackItem.scss';
import {Speaker} from "../../../../../../../shared/interfaces";
import {timetable} from "../../../../../../../shared/data";

interface TrackItemProps {
  speaker?: Speaker;
  isMain: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ speaker, isMain }) => {
  return (
    <div className={cc([css.TrackItem, isMain ? css.isMain : ''])}>
      <div className={css.Info}>
        {isMain ?
          <>
            <div className={css.Name}>
              {speaker.name}
            </div>
            <div className={css.TrackName}>
              {speaker.track.title}
            </div>
          </> :
          <>
            <div className={css.TrackName}>
              {speaker.track.title}
            </div>
            <div className={css.Name}>
              {speaker.name}
            </div>
          </>
        }
      </div>
      {isMain ?
        <div className={css.Time}>
          { speaker ? timetable[speaker.track.order] : '10:00 - 10:50' }
        </div> : null
      }
    </div>
  );
}

export default TrackItem;
