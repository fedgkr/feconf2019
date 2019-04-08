import React from 'react';
import css from './Hero.scss';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className={css.Hero}>
      <div className="contents">
        <h1>FECONF 2019를 후원해 주세요!</h1>
        <p>
          FEConf는 네이버, 라인, 카카오, NCSoft, 토스 등에 있는 현업 개발자들이 프런트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 함께 성장하기 위해 2017년부터 꾸준히 개최한 대한민국 최대의 프런트엔드 컨퍼런스입니다.
        </p>
        <p>
          그동안 컨퍼런스 진행 경험을 살려 올해도 프런트엔드 개발자들과 함께하는 FEConf 2019를 개최합니다. FEConf 2019 후원을 통해 프런트엔드 개발자 문화를 함께 만들고, 기업 홍보 및 채용 활동 등을 계획해 보세요!
        </p>
      </div>
    </div>
  );
}

export default Hero;
