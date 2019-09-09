import React from 'react';
import cc from "classcat";
import css from "./Intro.scss";

interface IntroProps {
}

const Intro: React.FC<IntroProps> = () => {
  return (
    <p className={cc([css.Intro, 'kr-text'])}>
      Enjoy Experience Everywhere <br/>
      프론트엔드 개발의 소중한 경험을 공유합니다! <br/><br/>
      FEConf2019가 여러분을 찾아갑니다. 벌써 3년째를 맞이하며 대한민국 최고의 프론트엔드 개발자 컨퍼런스로 자리 잡고 있습니다. 올해는 오랜시간 준비하여 선정한 다양하고 풍부해진 14개의 발표 세션을 통해 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하려고 합니다. <br/><br/>
      프론트엔드 개발자의 축제 FEConf! 올해도 많은 참여 부탁드립니다. <br/><br/>
      FEConf 공식 Facebook 페이지를 구독하시면 행사에 대한 정보를 보다 빠르게 받으실 수 있습니다. <br/>
      <a href="https://www.facebook.com/feconf.kr/" target="_blank">Facebook 페이지</a>의 공지 사항을 꼭 확인해주세요!
    </p>
  );
}

export default Intro;
