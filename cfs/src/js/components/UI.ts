export class UI {
  wrap = document.getElementById('ui');
  items: NodeListOf<HTMLAnchorElement>;
  logo: HTMLAnchorElement;
  downArrow: HTMLAnchorElement;

  constructor() {
    this.logo = this.wrap.querySelector('.logo');
    this.downArrow = this.wrap.querySelector('.down-arrow');
    this.items = this.wrap.querySelectorAll('.nav .item');
    this.logo.addEventListener('click', e => this.toHome(e));
    this.downArrow.addEventListener('click', e => this.onClickBottomArrow(e));
    this.items.forEach(i =>
      i.addEventListener('click', e => this.onClickNav(e)));
  }

  show() {
    this.wrap.classList.remove('hide');
  }

  hide() {
    this.wrap.classList.add('hide');
  }

  toggleArrowBottom(show) {
    if (show) {
      this.downArrow.classList.remove('hide');
    } else {
      this.downArrow.classList.add('hide');
    }
  }

  activateApplyBtn(idx) {
    const btn = this.wrap.querySelector('.apply-btn');
    if ([1, 2, 3].find(i => i === idx)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }

  updateNav(targetIdx) {
    const nav = this.wrap.querySelector('.nav');
    for (let i = 0; i < nav.children.length; i++) {
      nav.children[i].classList.remove('active');
    }
    nav.children[targetIdx].classList.add('active');
  }

  toHome(e) {
    e.preventDefault();
    fullpage_api.moveTo(1, 0);
  }

  afterSectionLeave(targetIdx) {
    this.updateNav(targetIdx);
    this.activateApplyBtn(targetIdx);
    this.toggleArrowBottom(targetIdx !== this.items.length - 1);
  }

  onClickNav(e) {
    const idx = Number(e.target.getAttribute('data-idx'));
    e.preventDefault();
    fullpage_api.moveTo(idx, 0);
  }

  onClickBottomArrow(e) {
    e.preventDefault();
    fullpage_api.moveSectionDown();
  }
}
