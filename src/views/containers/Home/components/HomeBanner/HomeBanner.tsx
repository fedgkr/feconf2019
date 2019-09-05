import React from 'react';
import css from './HomeBanner.scss';
import HoverButton from "../../../../components/HoverButton/HoverButton";
import {titleWords} from "../../../../../shared/data";

interface HomeBannerProps {
}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <div className={css.HomeBanner}>
      <div className={css.Banner}>
        {titleWords.map((word) => (
          <span key={word} className={css.Word}>{word}</span>
        ))}
        <div>
          {[...Array(7).keys()].map((idx) => (
            <div key={idx} className={css.SkewRect}/>
          ))}
        </div>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="2019 FEConf 참가 신청하기"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
