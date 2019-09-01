import React from 'react';
import css from './Track.scss';

interface TrackProps {
  title: string;
  isMain: boolean;
}

const Track: React.FC<TrackProps> = ({ title, isMain }) => {
  return (
    <div className={css.Track}>
      <div className={css.Title}>
        {title}
      </div>
      <div></div>
    </div>
  );
}

export default Track;
