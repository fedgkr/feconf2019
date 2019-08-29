import React from 'react';
import Link from 'next/link';
import css from './SpeakerBrief.scss';
import cc from "classcat";

interface SpeakerBriefProps {
}

const SpeakerBrief: React.FC<SpeakerBriefProps> = () => {
  return (
    <Link
      href={{ pathname: '/speakers/detail', query: { speakerName: 'jooyoung' } }}
      // as={`/speakers/jooyoung`}
    >
      <a>
        <div className={cc([css.SpeakerBrief, 'kr-text'])}>
          <div className={css.ProfileImage}>
            <img src="" alt=""/>
          </div>
          <p className={css.Name}>김이름</p>
          <p>Naver | Front-End Engineer</p>
        </div>
      </a>
    </Link>
  );
}

export default SpeakerBrief;
