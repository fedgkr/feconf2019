import React from 'react';
import css from './PreTrack.scss';

interface PreTrackProps {
}

const PreTrack: React.FC<PreTrackProps> = () => {
  return (
    <div className={css.PreTrack}>
      <div className={css.Row}>
        <span>10:00 ~ 10:40</span>
        <span>입장 및 등록</span>
      </div>
      <div className={css.Row}>
        <span>10:40 ~ 11:00</span>
        <span>오프닝 키노트</span>
      </div>
    </div>
  );
}

export default PreTrack;
