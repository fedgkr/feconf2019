import Section from "./Section"
import * as sponsors from '../../../static/images/sponsors/*.png';
delete sponsors.default;

const sponsorsUrl = {
  naver: 'https://www.navercorp.com/',
  ncsoft: 'http://kr.ncsoft.com/korean/',
  ooa: 'https://www.woowahan.com/',
};

export default class SponsorSection extends Section {
  render() {
    return `
      <h1 class="ft-title">FEConf 2019 스폰서</h1>
      <p class="ft-desc">
        (스폰서는 현재 모집 중입니다)
      </p>
      <div class="sponsor-list">
        ${this.renderSponsorList()}
      </div>
      <p>
        <a class="apply-btn" href="#" target="_blank">
          스피커 신청하기
        </a>
      </p>
    `;
  }

  private renderSponsorList() {
    const html = Object.keys(sponsors).map(key => {
      return `
        <a href="${sponsorsUrl[key]}" target="_blank">
          <img src="${sponsors[key]}" alt="${key}">
        </a>
      `;
    });
    return html.join('');
  }
}
