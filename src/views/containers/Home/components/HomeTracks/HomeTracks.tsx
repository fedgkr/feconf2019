import React, {useState} from 'react';
import css from './HomeTracks.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import cc from "classcat";
import Track from "./components/Track/Track";
import {getSpeakers} from "../../../../../shared/data";
import {TrackType} from "../../../../../shared/interfaces";
import HoverButton from "../../../../components/HoverButton/HoverButton";

interface HomeTracksProps {
}

const trackASpeakers = getSpeakers(TrackType.A);
const trackBSpeakers = getSpeakers(TrackType.B);

const HomeTracks: React.FC<HomeTracksProps> = () => {
  const [isFold, fold] = useState(true);
  return (
    <div className={cc(['container', css.HomeTracks])}>
      <TitleHero title="2 Tracks" subTitle="16 Talks"/>
      <p className={css.Date}>
        2019년 10월 26일 토요일, 10AM - 5PM
      </p>
      <div className={css.TrackWrap}>
        <Track title="Track 1" isMain={true} isFold={isFold} speakers={trackASpeakers}/>
        <Track title="Track 2" isMain={false} isFold={isFold} speakers={trackBSpeakers}/>
      </div>
      {isFold ?
        <div className={css.ButtonWrap}>
          <HoverButton
            title="스케쥴 더 보기"
            filled={false}
            onClick={() => fold(!isFold)}
          />
        </div> : null
      }
    </div>
  );
}

export default HomeTracks;
