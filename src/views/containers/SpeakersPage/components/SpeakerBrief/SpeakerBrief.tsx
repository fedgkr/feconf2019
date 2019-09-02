import React from 'react';
import Link from 'next/link';
import css from './SpeakerBrief.scss';
import cc from "classcat";
import {Speaker} from "../../../../../shared/interfaces";

interface SpeakerBriefProps {
  speaker: Speaker;
}

const SpeakerBrief: React.FC<SpeakerBriefProps> = ({ speaker }) => {
  return (
    speaker ?
      <Link
        href={{ pathname: '/speakers/detail', query: { speakerName: speaker.nameEn } }}
        // as={`/speakers/jooyoung`}
      >
        <a>
          <div className={cc([css.SpeakerBrief, 'kr-text'])}>
            <div className={css.ProfileImage}>
              <img src={`static/images/speakers/${speaker.image}`} alt={speaker.name}/>
            </div>
            <p className={css.Name}>{speaker.name}</p>
            {speaker.company ?
              <p>
                {speaker.company.name}
              </p> : null
            }
          </div>
        </a>
      </Link>
      :
      <Link href="#">
        <a><div className={css.SpeakerBrief}></div></a>
      </Link>
  );
}

export default SpeakerBrief;
