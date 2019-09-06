import React, {useState} from 'react';
import css from './HomeTracks.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import cc from "classcat";
import Track from "./components/Track/Track";
import {getSpeakers, timeRange} from "../../../../../shared/data";
import {TrackType} from "../../../../../shared/interfaces";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import useResponsive from "../../../../../shared/hooks/useResponsive";
import Viewable from "../../../../components/Viewable/Viewable";

interface HomeTracksProps {
}

const trackASpeakers = getSpeakers(TrackType.A);
const trackBSpeakers = getSpeakers(TrackType.B);

const HomeTracks: React.FC<HomeTracksProps> = () => {
  const [isFold, fold] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState(1);
  const {isMobile} = useResponsive();
  return (
    <Viewable>
      <div className={cc(['container', css.HomeTracks])}>
        <TitleHero title="2 Tracks" subTitle="14 Talks"/>
        <p className={css.Date}>
          { timeRange }
        </p>
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
        {isFold ?
          <div className={css.ButtonWrap}>
            <HoverButton
              title="스케쥴 더 보기"
              filled={false}
              width={isMobile ? "100%" : 300}
              onClick={() => fold(!isFold)}
            />
          </div> : null
        }
      </div>
    </Viewable>
  );
}

export default HomeTracks;
