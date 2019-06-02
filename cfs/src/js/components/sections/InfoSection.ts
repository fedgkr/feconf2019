import Section from "./Section"

export default class InfoSection extends Section {
  render() {
    return `
      <div class="page">
        <h1 class="ft-title">FEConf는 언제 어디서 하나요?</h1>
        <p class="ft-desc">날짜 : 2019년 10월 26일 토요일</p> 
        <p class="ft-desc">장소 : 롯데월드 타워</p>
        <p class="ft-desc">발표 주제 : 프론트엔드와 관련있는 주제라면 무엇이든 환영</p>
        <p class="ft-desc">신청방법 : 본 사이트를 통해 스피커 신청 양식(구글폼) 작성</p>
        <p class="ft-desc">
          모든 발표자 분께는 행사가 끝난 후에 소정의 강연료를 지급합니다.
        </p>
      </div>
    `;
  }
}
