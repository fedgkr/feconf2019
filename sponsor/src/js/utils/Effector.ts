export default class Effector {
  static flutter(el) {
    const txt = el.textContent;
    el.innerText = '';
    Array.from(txt).forEach((t: string) => {
      const span = document.createElement('span');
      span.innerText = t;
      span.classList.add(/^\s*$/.test(t) ? 'empty' : 'flutter-item');
      el.appendChild(span);
    });
    const duration = 550;
    const items = el.querySelectorAll('.flutter-item');
    const eachDelay = duration / items.length;
    items.forEach((i, idx) => {
      i.style.transition =
        `opacity .4s cubic-bezier(0.55, 0.055, 0.675, 0.19) ${eachDelay * idx}ms, transform .4s cubic-bezier(0.55, 0.055, 0.675, 0.19) ${eachDelay * idx}ms`;
    });
    setTimeout(() => {
      items.forEach(i => i.classList.add('fluttered'));
    }, 100);
  }
}
