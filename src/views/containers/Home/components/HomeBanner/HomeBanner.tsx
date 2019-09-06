import React from 'react';
import cc from 'classcat';
import css from './HomeBanner.scss';
import HoverButton from "../../../../components/HoverButton/HoverButton";
import {titleWords} from "../../../../../shared/data";
import {useInteraction} from "../../../../components/Viewable/Viewable";

interface HomeBannerProps {
}

const rects = [...Array(7).keys()];

const HomeBanner: React.FC<HomeBannerProps> = () => {
  const { wrapperEl, visible } = useInteraction();
  return (
    <div ref={wrapperEl} className={cc([css.HomeBanner, visible ? css.visible : ''])}>
      <div className={css.Banner}>
        {titleWords.map((word) => (
          <div key={word} className={css.Word}><span>{word}</span></div>
        ))}
        <div>
          {rects.map((idx) => (
            <div key={idx} className={css.SkewRect}/>
          ))}
        </div>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="FEConf2019 참가 신청하기"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
