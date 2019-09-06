import React, {useState} from 'react';
import css from './HomeInfo.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import cc from "classcat";
import useResponsive from "../../../../../shared/hooks/useResponsive";
import Viewable from "../../../../components/Viewable/Viewable";
import CoC from "../../../../components/CoC/CoC";
import Intro from "../../../../components/Intro/Intro";

interface HomeInfoProps {
}

const HomeInfo: React.FC<HomeInfoProps> = () => {
  const [isFold, fold] = useState(true);
  const {isMobile} = useResponsive();
  return (
    <Viewable>
      <div className={cc(['container', css.HomeInfo])}>
        <TitleHero
          title="FE Conference"
          subTitle="Event Information"
        />
        <Intro/>
        <CoC fold={isFold} />
        {isFold ?
          <div className={css.ButtonWrap}>
            <HoverButton
              title="더 보기"
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

export default HomeInfo;
