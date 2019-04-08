import React from 'react';
import css from './Sponsor.scss';

interface Props {}

const Sponsor: React.FC<Props> = () => {
  return (
    <div className={css.Sponsor}>
      <div className="contents">
        <h2>후원사 모집 기간</h2>
        <p>
          2019년 4월 15일 부터 2019년 5월 31일 까지
        </p>
        <h2>후원 등급 및 후원 금액</h2>
        <p>
          <span>Diamond (7,000,000)</span><br/>
          <span>Platinum (5,000,000)</span><br/>
          <span>Gold (3,000,000)</span><br/>
          <span>기타: 현물, 서비스 등 기타 후원일 경우 제안 부탁드립니다.</span><br/>
          <span>기존 후원사일 경우 후원 금액 10% 할인 해 드립니다.</span><br/>
        </p>

        <div className={css.SponsorPrize}>
          <h2>스폰서 혜택</h2>
          <div className={css.Row}>
            <div className={css.Column}>
              <div className={css.Title}>
                Diamond
              </div>
              <span>개별 홍보 시간 10분</span><br/>
              <span>Booth</span><br/>
              <span>현수막 로고</span><br/>
              <span>X Banner logo</span><br/>
              <span>홈페이지 로고</span><br/>
              <span>초대권 10장</span><br/>
            </div>

            <div className={css.Column}>
              <div className={css.Title}>
                Platinum
              </div>
              <span>Booth</span><br/>
              <span>현수막 로고</span><br/>
              <span>X Banner logo</span><br/>
              <span>홈페이지 로고</span><br/>
              <span>초대권 5장</span><br/>
            </div>

            <div className={css.Column}>
              <div className={css.Title}>
                Gold
              </div>
              <span>X Banner logo</span><br/>
              <span>홈페이지 로고</span><br/>
              <span>초대권 3장</span><br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
