import React, {useState} from 'react';
import css from './Tracks.scss';
import Track from "../../containers/Home/components/HomeTracks/components/Track/Track";
import {getSpeakers} from "../../../shared/data";
import {TrackType} from "../../../shared/interfaces";

interface TracksProps {
  isFold: boolean;
}

const trackASpeakers = getSpeakers(TrackType.A);
const trackBSpeakers = getSpeakers(TrackType.B);

const Tracks: React.FC<TracksProps> = ({ isFold }) => {
  const [selectedTrack, setSelectedTrack] = useState(1);
  return (
    <>
      <div className={css.TrackTitle}>
        <div>
          <a
            className={selectedTrack === 1 ? css.selected : ''}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTrack(1);
            }}
          >
            <span>Track1</span>
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
        <div>
          <span>({selectedTrack === 1 ? '오디토리움' : '컨퍼런스룸'})</span>
        </div>
      </div>
      <div className={css.TrackWrap}>
        <Track
          title="Track 1"
          isMain={true}
          isFold={isFold}
          selected={selectedTrack === 1}
          speakers={trackASpeakers}
        />
        <Track
          title="Track 2"
          isMain={false}
          isFold={isFold}
          selected={selectedTrack === 2}
          speakers={trackBSpeakers}
        />
      </div>
    </>
  );
}

export default Tracks;
