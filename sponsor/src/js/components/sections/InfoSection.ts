import Section from "./Section"

const infoList = [
  {
    title: 'FEConf 2017',
    location: '롯데타워 SKY31 컨벤션(400여명 규모)',
    website: 'https://2017.feconf.kr/',
    videos: 'https://youtu.be/psIees_xuEY',
    other: 'FEConf 2018'
  },
  {
    title: 'FEConf 2018',
    location: '롯데타워 SKY31 컨벤션(400여명 규모)',
    website: 'https://2018.feconf.kr/',
    videos: 'https://youtu.be/psIees_xuEY',
    other: 'FEConf 2017',
  },
];

export default class InfoSection extends Section {
  page: HTMLDivElement;
  modal: HTMLDivElement;
  content: HTMLDivElement;

  render() {
    return `
      <div class="page">
        <h1 class="ft-title">When & Where?</h1>
        <p class="ft-desc">
          FE Conf는 2019년 9월~10월 중 개최 예정이며 <br/> 
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
      <div class="modal extended">
        <div class="square extended">
          <div class="content extended">
            <a href="#" class="close-btn"></a>
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
    this.modal = this.wrap.querySelector('.modal');
    this.content = this.wrap.querySelector('.content');
  }

  private openModal(title) {
    const info = infoList.find(i => i.title === title);
    this.page.classList.add('hide');
    this.modal.classList.add('open');
    this.renderContent(info);
  }

  private closeModal() {
    this.page.classList.remove('hide');
    this.modal.classList.remove('open');
  }

  private renderContent(info) {
    this.content.classList.remove('active');
    setTimeout(() =>
      this.content.classList.add('active'), 100);
    const title = this.modal.querySelector('h1');
    const location = this.modal.querySelector('.modal-location');
    const website = this.modal.querySelector('.modal-website');
    const videos = this.modal.querySelector('.modal-videos');
    const other = this.modal.querySelector('.modal-other');

    title.innerText = info.title;
    location.innerHTML = info.location;
    website.innerHTML = info.website;
    videos.innerHTML = info.videos;
    other.innerHTML = info.other;
    website.setAttribute('href', info.website);
    videos.setAttribute('href', info.videos);
    other.setAttribute('data-target', info.other);
  }
}
