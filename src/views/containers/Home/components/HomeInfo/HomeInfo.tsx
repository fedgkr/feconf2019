import React from 'react';
import css from './HomeInfo.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import cc from "classcat";
import useResponsive from "../../../../../shared/hooks/useResponsive";

interface HomeInfoProps {
}

const HomeInfo: React.FC<HomeInfoProps> = () => {
  const {isMobile} = useResponsive();
  return (
    <div className={cc(['container', css.HomeInfo])}>
      <TitleHero
        title="FE Conference"
        subTitle="Event Information"
      />
      <p className={cc([css.Intro, 'kr-text'])}>
        FE Conference는 지난 2013년부터 시작된 Front-End Engineer 및 디자이너의 모임으로, <br/>
        현재까지 매년 성공적인 컨퍼런스를 주최하고 있는 모임입니다. 그리고 부연설명이 들어가게 됩니다. <br/>
        중언부언 왜이렇게 여행가기전에 할 일이 많은지.. 모두 다 끝내고 갈 수 있을까요? 그냥 랩탑을 가져가야 할 것 같습니다.
      </p>
      <div className={css.CoC}>
        <h3>Code of Conduct</h3>
        <p className="kr-text">
          FE Conference는 지난 2013년부터 시작된 Front-End Engineer 및 디자이너의 모임으로, <br/>
          현재까지 매년 성공적인 컨퍼런스를 주최하고 있는 모임입니다. 그리고 부연설명이 들어가게 됩니다. <br/>
          중언부언 왜이렇게 여행가기전에 할 일이 많은지.. 모두 다 끝내고 갈 수 있을까요? 그냥 랩탑을 가져가야 할 것 같습니다.
        </p>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="더 보기"
          filled={false}
          width={isMobile ? "100%" : 300}
        />
      </div>
    </div>
  );
}

export default HomeInfo;
