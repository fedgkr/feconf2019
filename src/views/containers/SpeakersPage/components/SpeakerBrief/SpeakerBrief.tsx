import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import css from './SpeakerBrief.scss';
import cc from "classcat";
import {Speaker} from "../../../../../shared/interfaces";

interface SpeakerBriefProps {
  speaker: Speaker;
  order: number;
}

const SpeakerBrief: React.FC<SpeakerBriefProps> = ({ speaker, order }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const cssDelay = { transitionDelay: `${order * .05}s` };
  useEffect(() => {
    if (ref.current && ref.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    speaker ?
      <Link
        href={{ pathname: '/speakers/detail', query: { speakerName: speaker.nameEn } }}
        // as={`/speakers/jooyoung`}
      >
        <a>
          <div className={cc([css.SpeakerBrief, 'kr-text', loaded ? css.loaded : ''])}>
            <div className={cc([css.ProfileImage])} style={cssDelay}>
              <img
                ref={ref}
                src={`static/images/speakers/${speaker.image}`}
                alt={speaker.name}
                onLoad={() => setLoaded(true)}
              />
            </div>
            <div className={css.Info} style={cssDelay}>
              <p className={css.Name}>{speaker.name}</p>
              {speaker.company ?
                <p>
                  {speaker.company.name}
                </p> : null
              }
            </div>
          </div>
        </a>
      </Link>
      :
      <Link href="#">
        <a><div className={cc([css.SpeakerBrief, css.empty])}></div></a>
      </Link>
  );
}

export default SpeakerBrief;
