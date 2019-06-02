export default abstract class Section {
  id: string;
  wrap: HTMLDivElement;

  constructor(id) {
    this.id = id;
    this.wrap = document.getElementById(id) as HTMLDivElement;
  }
  abstract render(): string
  onMount?(): void
  onLoad?(): void
  onLeave?(): void

  init() {
    this.wrap.innerHTML = this.render();
    this.onMount && this.onMount();
  }

  afterLoad() {
    this.wrap.classList.add('loaded');
    this.onLoad && this.onLoad();
  }

  afterLeave() {
    this.wrap.classList.remove('loaded');
    this.onLeave && this.onLeave();
  }
}
