import Section from "./Section"

export default class PricingSection extends Section {
  render() {
    return `
      <h1 class="ft-title">후원 등급 및 후원 금액</h1>
      
      <div>      
        <h2 class="ft-sub">Diamond (5,000,000 원)</h2>
        <h2 class="ft-sub">Platinum (3,000,000 원)</h2>
        <h2 class="ft-sub">Gold (2,000,000 원)</h2>
      </div>

      <p class="ft-desc">
        현물, 서비스 등 기타 후원일 경우 직접 제안 부탁드립니다.<br/>
        기존 후원사일 경우 후원 금액 10% 할인 해 드립니다.      
      </p>
    `;
  }
}
