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
        Enjoy Experience Everywhere <br/>
        프론트엔드 개발의 소중한 경험을 공유합니다! <br/>
        FEConf2019가 여러분을 찾아갑니다. 벌써 3년째를 맞이하며 대한민국 최고의 프론트엔드 개발자 컨퍼런스로 자리 잡고 있습니다. 올해는 오랜시간 준비하여 선정한 다양하고 풍부해진 14개의 발표 세션을 통해 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이이트를 공유하며 여러분과 함께 성장하려고 합니다. <br/>
        프론트엔드 개발자의 축제 FEConf! 올해도 많은 참여 부탁드립니다. <br/>
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
