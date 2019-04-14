import React from 'react';
import css from './History.scss';

interface Props {
}

const History: React.FC<Props> = () => {
  return (
    <div className={css.History}>
      <div className="contents">
        <h2>FEConf 2019</h2>
        <p>
          <span>* 2019년 9월~10월 중 개최 예정</span><br/>
          <span>* 4-500 여명 규모</span><br/>
          <span>* 2트랙 12세션</span>
        </p>

        <h2>FEConf 2018</h2>
        <p>
          <span>* 장소: 롯데타워 SKY31 컨벤션(400여명 규모)</span><br/>
          <span>* 홈페이지: <a href="https://2018.feconf.kr/">https://2018.feconf.kr/</a></span><br/>
          <span>* 발표영상: <a href="https://youtu.be/lmVqI04Aj0o">https://youtu.be/lmVqI04Aj0o</a></span><br/>
          <span>* 후원사(로고): 우하한형제들, 네이버, 카카오, 토스, 프로토파이, 뱅크샐러드, NCSoft, N Tech Service, Jet Brains, 인사이트, MANNING</span><br/>
        </p>
        <h2>FEConf 2017</h2>
        <p>
          <span>* 장소: 마루 180(150여명 규모)</span><br/>
          <span>* 홈페이지: <a href="https://2017.feconf.kr/">https://2017.feconf.kr/</a></span><br/>
          <span>* 발표영상: <a href="https://youtu.be/psIees_xuEY">https://youtu.be/psIees_xuEY</a></span><br/>
          <span>* 후원사(로고): 레진, 네이버, NCSoft</span><br/>
        </p>
      </div>
    </div>
  );
}

export default History;
