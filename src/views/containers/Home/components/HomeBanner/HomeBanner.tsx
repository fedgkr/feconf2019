import React from 'react';
import css from './HomeBanner.scss';
import HoverButton from "../../../../components/HoverButton/HoverButton";

interface HomeBannerProps {
}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <div className={css.HomeBanner}>
      <div className={css.Banner}>

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
