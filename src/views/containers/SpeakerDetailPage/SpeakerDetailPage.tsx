import React from 'react';
import { animated, useSpring } from 'react-spring';
import css from './SpeakerDetailPage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import {fadeInUpAnimation} from "../../../shared/animations";

interface SpeakerDetailPageProps {
}

const SpeakerDetailPage: React.FC<SpeakerDetailPageProps> = () => {
  const bgAnimation = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-101%)' },
    delay: 300,
  });
  const info1Animation = useSpring({ ...fadeInUpAnimation, delay: 500 });
  const info2Animation = useSpring({ ...fadeInUpAnimation, delay: 640 });
  const info3Animation = useSpring({ ...fadeInUpAnimation, delay: 780 });
  return (
    <div className={css.SpeakerDetailPage}>
      <TitleHero title="2019" subTitle="Speakers" />
      <div className={css.Container}>
        <div className={css.ProfileWrap}>
          <div>
            <div className={css.ImageWrap}>
              <img src="" alt=""/>
            </div>
            <h3 className={css.Name}>윤휴먼</h3>
            <span className={css.Party}>Sendbird | FE Engineer</span>
          </div>
          <animated.div style={bgAnimation} className={css.ProfileBg}/>
        </div>
        <div className={css.InfoWrap}>
          <div className={css.Cover}/>
          <div className={css.Contents}>
            <animated.p style={info1Animation} className={css.Desc}>
              윤휴먼은 뉴욕에서 태어나 서울로 돌아온 사람으로서 더 나은 개발의 방향을 고민하고 더 나아가 인류에게 도움이 되는 엔지니어링을 생각하는 사람이다. 서울로 돌아온 후 쿠팡에서 커리어를 시작하여 현재 샌드버드까지 다양한 Front-End 경험을 이어나가고 있다.그리고 원한다면 200자 내외로 텍스트가 조금 더 들어가도 됩니다.
            </animated.p>
            <animated.div style={info2Animation} className={css.TrackInfo}>
              <span>2019년 10월 26일 | 10:30분</span><br/>
              <span>Track 2</span>
            </animated.div>
            <animated.div style={info3Animation} className={css.Title}>
              React Native에서 Native한 애니메이션 짜기
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerDetailPage;
