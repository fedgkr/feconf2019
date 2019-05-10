export class UI {
  wrap = document.getElementById('ui');

  constructor() {
    const items = this.wrap.querySelectorAll('.nav .item');
    items.forEach(i =>
      i.addEventListener('click', e => this.onClickNav(e)));
  }

  show() {
    this.wrap.classList.remove('hide');
  }

  hide() {
    this.wrap.classList.add('hide');
  }

  activateSupportBtn(idx) {
    const btn = this.wrap.querySelector('.support-btn');
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

  onClickNav(e) {
    const idx = Number(e.target.getAttribute('data-idx'));
    e.preventDefault();
    fullpage_api.moveTo(idx, 0);
  }
}
