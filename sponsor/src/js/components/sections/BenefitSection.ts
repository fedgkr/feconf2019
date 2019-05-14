import Section from "./Section"

const benefits = [
  {
    id: 'diamond',
    desc: `
      <strong>개별 홍보 시간</strong> 10분, 초대권 <strong>10</strong>장, Booth<br/>
      현수막 로고, X Banner logo, 홈페이지 로고 노출
    `
  },
  {
    id: 'platinum',
    desc: `
      <strong>Booth</strong>, 초대권 <strong>5</strong>장, 현수막 로고<br/> 
      X Banner logo, 홈페이지 로고 노출
    `
  },
  {
    id: 'gold',
    desc: `
      초대권 <strong>3</strong>장, 현수막 로고, X Banner logo<br/>
      홈페이지 로고 노출
    `
  },
];

export default class BenefitSection extends Section {
  currentIdx = 0;

  render() {
    return `
      <h1 class="ft-title">후원사 혜택</h1>
      <div class="class-wrap">
        <a href="">
          <h3 class="ft-sub">Diamond</h3>
        </a>
        <a href="">
          <h3 class="ft-sub">Platinum</h3>
        </a>
        <a href="">
          <h3 class="ft-sub">Gold</h3>
        </a>
      </div>
      <div class="desc-wrap">
        <p class="ft-desc"></p>
      </div>
      <a class="support-btn" href="#" target="_blank">
        FEConf 후원하기
      </a>
    `;
  }

  onMount() {
    const children = this.getClassChildren();
    for (let i = 0; i < children.length; i++) {
      children[i].addEventListener('click', e =>
        this.onClickBenefit(e, i));
    }
    this.updateBenefit();
  }

  private updateBenefit() {
    const children = this.getClassChildren();
    document.body.classList.add(benefits[this.currentIdx].id);
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('active');
    }
    children[this.currentIdx].classList.add('active');
    const desc = this.wrap.querySelector('.desc-wrap > p');
    desc.classList.remove('active');
    desc.innerHTML = benefits[this.currentIdx].desc;
    setTimeout(() =>
      desc.classList.add('active'), 100);
  }

  private onClickBenefit(e, idx) {
    e.preventDefault();
    this.removeAllBodyClass();
    this.currentIdx = idx;
    this.updateBenefit();
  }

  private getClassChildren() {
    return this.wrap.querySelector('.class-wrap').children;
  }

  private removeAllBodyClass() {
    benefits.forEach(b =>
      document.body.classList.remove(b.id));
  }
}
