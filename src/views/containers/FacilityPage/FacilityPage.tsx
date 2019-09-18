import React from 'react';
import css from './FacilityPage.scss';
import cc from "classcat";
import Footer from "../../components/Footer/Footer";
import TitleHero from "../../components/TitleHero/TitleHero";

interface FacilityPageProps {
}

const FacilityPage: React.FC<FacilityPageProps> = () => {
  return (
    <>
      <div className={cc(['container', css.FacilityPage])}>
        <TitleHero title="SKY 31 Convention" subTitle="Facility Guide"/>
        <div className={css.Item}>
          <h2>공간 안내</h2>
          <ul>
            <li>
              <a target="_blank" href="https://www.sky31convention.com/ko/intro/skyIntro_Auditorium.do">
                오디토리움
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.sky31convention.com/ko/intro/skyIntro_ConfA.do">
                컨퍼런스 A룸
              </a>
            </li>
          </ul>
        </div>
        <div className={css.Item}>
          <h2>주변 식당 안내</h2>
          <ul>
            <li>
              <a target="_blank" href="https://www.lwt.co.kr/department/theme/list.do?srch_category=030007">
                SKY31 FOOD AVENUE
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.lwt.co.kr/department/theme/list.do?srch_category=030002">
                롯데몰 5, 6층 29스트리트
              </a>
            </li>
          </ul>
        </div>
        <div className={css.Item}>
          <h2>오시는 길</h2>
          <p>
            <a target="_blank" href="https://www.sky31convention.com/ko/customer/info/skyMap.do#">
              <img src="/static/images/location.jpg" alt="Location"/>
            </a>
          </p>
        </div>
        <div className={css.Item}>
          <h2>주차 안내</h2>
          <p>
            롯데월드타워 지하 주차장 B2F ~ B6F<br/>
            10시~20시는 10분당 500원(그 외 시간: 200원, 1일 최대요금 45,000원)
          </p>
        </div>
        <div className={css.Item}>
          <h2>기타 문의</h2>
          <p>
            기타 문의사항은 <a href="mailto:feconf@googlegroups.com">feconf@googlegroups.com</a>으로 문의해 주세요.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default FacilityPage;
