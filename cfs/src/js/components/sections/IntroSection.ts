import Section from "./Section"

export default class IntroSection extends Section {
  timeout: number;

  render() {
    return `
      <h1 class="ft-title">
        FEConf 2019 - Call for Speakers
      </h1>
      <p class="ft-sub">
        올해로 세번째를 맞은 FEConf 2019에서<br/>
        자신의 소중한 경험을 나눌 발표자들을 모십니다.
      </p>
      <p class="ft-desc">
        FEConf는 프론트엔드 기술을 주제로 프론트엔드개발그룹이 주최하는 비영리 콘퍼런스입니다. 
        페이스북 커뮤니티인 프론트엔드개발그룹은 2014년 4월에 탄생하여, 2019년 6월 현재 1만 4천여 명의 
        회원이 활동하는 국내 최대의 프론트엔드 개발 커뮤니티입니다. 
      </p>
      <p class="ft-desc">
        올해로 세번째를 맞은 FEConf에서 자신의 소중한 경험을 나누어 줄 발표자를 모십니다.
        궁금하신 점이 있으신 분은 언제든지 feconf@googlegroups.com로 문의해 주세요.
        열정있는 프론트엔드 개발자 분들의 많은 신청 부탁드립니다!  
      </p>
    `;
  }

  onLoad() {
    this.timeout = setTimeout(() => {
      this.wrap.classList.add('phase-2');
    }, 100);
    document.body.classList.add('phase-2');
  }

  onLeave() {
    clearTimeout(this.timeout);
    this.wrap.classList.remove('phase-2');
    document.body.classList.remove('phase-2');
  }
}

