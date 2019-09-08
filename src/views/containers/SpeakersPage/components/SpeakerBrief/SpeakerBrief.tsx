import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import css from './SpeakerBrief.scss';
import cc from "classcat";
import {Speaker} from "../../../../../shared/interfaces";
import {useModal} from "../../../../../shared/store";

interface SpeakerBriefProps {
  speaker: Speaker;
  order: number;
}

const SpeakerBrief: React.FC<SpeakerBriefProps> = ({ speaker, order }) => {
  const { openSpeakerDetailModal } = useModal();
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
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openSpeakerDetailModal({ speakerDetail: true }, speaker);
          }}
        >
          <div className={cc([css.SpeakerBrief, 'kr-text', loaded ? css.loaded : ''])}>
            <div className={cc([css.ProfileImage])} style={cssDelay}>
              <img
                ref={ref}
                src={`/static/images/speakers/${speaker.image}`}
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
      :
      <a><div className={cc([css.SpeakerBrief, css.empty])}></div></a>
  );
}

export default SpeakerBrief;
