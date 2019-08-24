import React from 'react';
import css from './SpeakerBrief.scss';

interface SpeakerBriefProps {
}

const SpeakerBrief: React.FC<SpeakerBriefProps> = () => {
  return (
    <div className={css.SpeakerBrief}>
      <div className={css.ProfileImage}>
        <img src="" alt=""/>
      </div>
      <p className={css.Name}>김이름</p>
      <p>Naver | Front-End Engineer</p>
    </div>
  );
}

export default SpeakerBrief;
