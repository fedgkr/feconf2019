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
import PreTrack from "../../../../components/PreTrack/PreTrack";
import Tracks from "../../../../components/Tracks/Tracks";

interface HomeTracksProps {
}

const HomeTracks: React.FC<HomeTracksProps> = () => {
  const [isFold, fold] = useState(true);
  const {isMobile} = useResponsive();
  return (
    <Viewable>
      <div className={cc(['container', css.HomeTracks])}>
        <TitleHero title="2 Tracks" subTitle="14 Talks"/>
        <p className={css.Date}>
          { timeRange }
        </p>
        <PreTrack/>
        <Tracks isFold={isFold} />
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
