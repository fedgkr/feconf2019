import React from 'react';
import cc from 'classcat';
import css from './TrackItem.scss';
import {Speaker} from "../../../../../../../shared/interfaces";
import {timetable} from "../../../../../../../shared/data";
import {useModal} from "../../../../../../../shared/store";

interface TrackItemProps {
  speaker?: Speaker;
  isMain: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ speaker, isMain }) => {
  const { openSpeakerDetailModal } = useModal();
  return (
    <div className={cc([css.TrackItem, isMain ? css.isMain : ''])}>
      <a className={css.Info} href="#" onClick={e => {
        e.preventDefault();
        openSpeakerDetailModal({ speakerDetail: true }, speaker);
      }}>
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
      </a>
      {isMain ?
        <div className={css.Time}>
          { speaker ? timetable[speaker.track.order] : '10:00 - 10:50' }
        </div> : null
      }
      <a className={css.Mobile} href="#" onClick={e => {
        e.preventDefault();
        openSpeakerDetailModal({ speakerDetail: true }, speaker);
      }}>
        <div className={css.MobileTime}>
          <span>{ speaker ? timetable[speaker.track.order] : '10:00 - 10:50' }</span>
          <span className={css.Name}>{speaker.name}</span>
        </div>
        <div className={css.TrackName}>
          {speaker.track.title}
        </div>
      </a>
    </div>
  );
}

export default TrackItem;
