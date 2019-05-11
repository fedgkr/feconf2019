import fullpage from 'fullpage.js';
import IntroSection from "./components/sections/IntroSection"
import InfoSection from "./components/sections/InfoSection"
import DueSection from "./components/sections/DueSection"
import PricingSection from "./components/sections/PricingSection"
import BenefitSection from "./components/sections/BenefitSection"
import { UI } from "./components/UI"

const ui = new UI();
const sections = [
  new IntroSection('intro-section'),
  new InfoSection('info-section', ui),
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
    ui.afterSectionLeave(target.index);
  },
  afterLoad(_, dest) {
    sections[dest.index].afterLoad();
  },
});

document.querySelectorAll('a.support-btn').forEach(item =>
  item.setAttribute('href', SUPPORT_URL));

window.addEventListener('resize', onResize);
onResize();

function onResize() {
  let style = document.getElementById('square-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'square-style';
    document.head.appendChild(style);
  }
  style.innerHTML = `.square {max-width: ${Math.min(window.innerHeight, 1024)}px;}`;
}
