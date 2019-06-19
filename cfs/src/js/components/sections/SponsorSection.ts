import Section from "./Section"
import * as sponsors from '../../../static/images/sponsors/*.png';
delete sponsors.default;

const sponsorsUrl = {
  naver: 'https://www.navercorp.com/',
  ncsoft: 'http://kr.ncsoft.com/korean/',
  ooa: 'https://www.woowahan.com/',
  peoplefund: 'https://www.peoplefund.co.kr/',
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
    `.trim();
  }

  private renderSponsorList() {
    const wrap = document.createElement('div');
    Object.keys(sponsors).forEach((key, idx) => {
      const item = document.createElement('div');
      item.innerHTML = `
        <a href="${sponsorsUrl[key]}" target="_blank">
          <img src="${sponsors[key]}" alt="${key}">
        </a>
      `.trim();
      if (idx % 2 === 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        wrap.appendChild(row);
      }
      const latest = wrap.children[wrap.children.length - 1];
      latest.appendChild(item.lastChild);
    });
    return wrap.outerHTML;
  }
}
