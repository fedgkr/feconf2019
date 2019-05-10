import fullpage from 'fullpage.js';
import IntroSection from "./components/sections/IntroSection"
import InfoSection from "./components/sections/InfoSection"
import DueSection from "./components/sections/DueSection"
import PricingSection from "./components/sections/PricingSection"
import BenefitSection from "./components/sections/BenefitSection"

const sections = [
  new IntroSection('intro-section'),
  new InfoSection('info-section'),
  new DueSection('due-section'),
  new PricingSection('pricing-section'),
  new BenefitSection('benefit-section'),
];

document.querySelectorAll('.section').forEach((_, i) => {
  if (sections[i]) {
    sections[i].init();
  }
});

new fullpage('#fullpage', {
  licenseKey: 'uobwH@p8',
  anchors: ['intro', 'info', 'due', 'pricing', 'benefit'],
  onLeave(origin, target) {
    sections[origin.index].afterLeave();
    updateNav(target.index);
    activateSupportBtn(target.index);
  },
  afterLoad(_, dest) {
    sections[dest.index].afterLoad();
  }
});

document.querySelectorAll('a.support-btn').forEach(item =>
  item.setAttribute('href', SUPPORT_URL));

window.addEventListener('resize', onResize);
onResize();

function updateNav(targetIdx) {
  const nav = document.querySelector('.nav');
  for (let i = 0; i < nav.children.length; i++) {
    nav.children[i].classList.remove('active');
  }
  nav.children[targetIdx].classList.add('active');
}

function activateSupportBtn(idx) {
  const btn = document.querySelector('.ui .support-btn');
  if ([2, 3].find(i => i === idx)) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function onResize() {
  let style = document.getElementById('square-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'square-style';
    document.head.appendChild(style);
  }
  const template = `.square {max-width: ${Math.min(window.innerHeight, 1024)}px;}`;
  style.innerHTML = template;
}
