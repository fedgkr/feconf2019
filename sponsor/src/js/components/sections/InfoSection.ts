import Section from "./Section"
import { UI } from "../UI"

const infoList = [
  {
    id: 'feconf2017',
    title: 'FEConf 2017',
    location: '마루 180(150여명 규모)',
    website: 'https://2017.feconf.kr/',
    videos: 'https://youtu.be/lmVqI04Aj0o',
    other: 'FEConf 2018',
  },
  {
    id: 'feconf2018',
    title: 'FEConf 2018',
    location: '롯데타워 SKY31 컨벤션(400여명 규모)',
    website: 'https://2018.feconf.kr/',
    videos: 'https://youtu.be/psIees_xuEY',
    other: 'FEConf 2017'
  },
];

export default class InfoSection extends Section {
  page: HTMLDivElement;
  square: HTMLDivElement;
  content: HTMLDivElement;
  timeout: number;

  constructor(id, private ui: UI) {
    super(id);
  }

  render() {
    return `
      <div class="page">
        <h1 class="ft-title">When & Where?</h1>
        <p class="ft-desc">
          FEConf는 2019년 9월~10월 중 개최 예정이며 <br/> 
           4-500 여명 규모의 참가자와 <br/> 
           2트랙으로 12세션을 진행할 예정입니다.
        </p>
        <div class="link-wrap">
          <div class="link ft-desc">
            <a href="#" data-target="FEConf 2017" target="_blank">FEConf 2017 보기</a>
          </div>
          <div class="link ft-desc">
            <a href="#" data-target="FEConf 2018" target="_blank">FEConf 2018 보기</a>
          </div>
        </div>
      </div>
      <div class="square extended">
        <div class="modal extended">
          <div class="content extended">
            <a href="#" class="close-btn">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   viewBox="0 0 460.775 460.775" xml:space="preserve">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                \tc-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                \tc-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                \tc-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                \tl171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                \tc6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
              </svg>
            </a>
            <h1 class="ft-title"></h1>
            <div>
              <p class="ft-desc">
                <span>장소:</span>&nbsp;
                <span class="modal-location"></span>
              </p>
              <p class="ft-desc">
                <span>홈페이지:</span>&nbsp;
                <a class="modal-website" target="_blank"></a>
              </p>
              <p class="ft-desc">
                <span>발표영상:</span>&nbsp;
                <a class="modal-videos" target="_blank"></a>
              </p>
              <p class="ft-desc">
                <a class="modal-other" href="#"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  onMount() {
    const links = this.wrap.querySelectorAll('.link-wrap a, .modal-other');
    const close = this.wrap.querySelector('.close-btn');
    links.forEach(i =>
      i.addEventListener('click', e => {
        e.preventDefault();
        this.openModal(i.getAttribute('data-target'));
      }));
    close.addEventListener('click', e => {
      e.preventDefault();
      this.closeModal();
    });
    this.page = this.wrap.querySelector('.page');
    this.square = this.wrap.querySelector('.square');
    this.content = this.wrap.querySelector('.content');
  }

  onLeave() {
    clearTimeout(this.timeout);
    this.ui.show();
    this.closeModal();
  }

  private openModal(title) {
    this.removeAllBodyClass();
    const info = infoList.find(i => i.title === title);
    document.body.classList.add(info.id);
    this.page.classList.add('hide');
    this.square.classList.add('open');
    this.ui.hide();
    this.renderContent(info);
  }

  private closeModal() {
    this.removeAllBodyClass();
    this.page.classList.remove('hide');
    this.square.classList.remove('open');
    this.ui.show();
  }

  private renderContent(info) {
    this.content.classList.remove('active');
    this.timeout = window.setTimeout(() => this.content.classList.add('active'), 100);
    const title = this.square.querySelector('h1');
    const location = this.square.querySelector('.modal-location');
    const website = this.square.querySelector('.modal-website');
    const videos = this.square.querySelector('.modal-videos');
    const other = this.square.querySelector('.modal-other');

    title.innerText = info.title;
    location.innerHTML = info.location;
    website.innerHTML = info.website;
    videos.innerHTML = info.videos;
    other.innerHTML = info.other;
    website.setAttribute('href', info.website);
    videos.setAttribute('href', info.videos);
    other.setAttribute('data-target', info.other);
  }

  private removeAllBodyClass() {
    infoList.forEach(i =>
      document.body.classList.remove(i.id));
  }
}
