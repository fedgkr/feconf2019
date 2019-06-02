import Section from "./Section"

export default class IntroSection extends Section {
  render() {
    return `
      <h1 class="ft-title">
        FEConf 2019<br/>Call for Speakers
      </h1>
      <p class="ft-sub">
        올해로 세번째를 맞은 FEConf 2019에서<br/>
        자신의 소중한 경험을 나눌 발표자들을 모십니다.
      </p>
    `;
  }
}

