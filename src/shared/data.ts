import {Company, Speaker, SponsorGrade, Track, TrackType} from "./interfaces";

export const applyLink = 'https://booking.naver.com/booking/5/bizes/263881/items/3170721';

export const timeRange = '2019년 10월 26일 토요일, 10AM - 6:20PM';

export const titleWords = [
  'Sustainability',
  'Diversity',
  'Transparency',
  'Growth',
];

export const timetable = [
  '11:00 - 11:40',
  '11:50 - 12:30',
  '14:00 - 14:40',
  '14:50 - 15:30',
  '16:00 - 16:40',
  '16:50 - 17:30',
  '17:40 - 18:20',
];

export const companies: Company[] = [
  {
    name: 'Erion Company',
    link: 'https://erion.kr',
  },
  {
    name: 'Programmers',
    link: 'https://programmers.co.kr',
    image: 'programmers.png',
    sponsor: {
      grade: SponsorGrade.Gold,
    },
  },
  {
    name: '우아한형제들',
    link: 'https://www.woowahan.com',
    image: 'woowahan.png',
    sponsor: {
      grade: SponsorGrade.Diamond,
    },
  },
  {
    name: '카카오뱅크',
    link: 'https://www.kakaobank.com',
  },
  {
    name: '네이버',
    link: 'https://www.navercorp.com',
    image: 'naver.png',
    sponsor: {
      grade: SponsorGrade.Platinum,
    },
  },
  {
    name: 'Lunit Inc.',
    link: 'https://www.lunit.io',
  },
  {
    name: '뱅크샐러드',
    link: 'https://rainist.com',
  },
  {
    name: 'Wave Corporation',
    link: 'https://www.wavetogether.com',
  },
  {
    name: 'PUBG',
    link: 'https://www.pubg.com/ko/',
  },
  {
    name: '마플',
    link: 'https://www.marpple.com/kr/',
  },
  {
    name: '비바리퍼블리카',
    link: 'https://toss.im',
    image: 'toss2.png',
    sponsor: {
      grade: SponsorGrade.Diamond,
    },
  },
  {
    name: 'LINE Financial Plus',
    link: 'https://linepluscorp.com',
  },
  {
    name: '주식회사 체커',
    link: 'https://www.chequer.io',
  },
  {
    name: 'KossLab',
    link: 'https://kosslab.kr',
  },
  {
    name: 'ncsoft',
    link: 'http://ncsoft.com',
    image: 'ncsoft.png',
    sponsor: {
      grade: SponsorGrade.Gold,
    },
  },
  {
    name: 'jetbrains',
    link: 'https://jetbrains.com',
    image: 'jetbrains.svg',
    sponsor: {
      grade: SponsorGrade.Platinum,
    },
  },
  {
    name: 'peoplefund',
    link: 'https://www.peoplefund.co.kr',
    image: 'peoplefund.svg',
    sponsor: {
      grade: SponsorGrade.Gold,
    },
  },
  {
    name: 'rainist',
    link: 'https://rainist.com',
    image: 'rainist2.png',
    sponsor: {
      grade: SponsorGrade.Platinum,
    },
  },
  {
    name: 'soomgo',
    link: 'https://soomgo.com',
    image: 'soomgo.svg',
    sponsor: {
      grade: SponsorGrade.Platinum,
    },
  },
  {
    name: 'marpple',
    link: 'https://marpple.com',
    image: 'marpple.png',
    sponsor: {
      grade: SponsorGrade.Platinum,
    },
  },
  {
    name: 'yanolja',
    link: 'https://yanolja.com',
    image: 'yanolja.png',
    sponsor: {
      grade: SponsorGrade.Platinum,
    },
  },
  {
    name: 'Robert Walters',
    link: 'https://www.robertwalters.co.kr',
    image: 'robert.png',
    sponsor: {
      grade: SponsorGrade.Gold,
    },
  },
  {
    name: '제이펍',
    link: 'http://jpub.kr',
    image: 'jpub.jpeg',
    sponsor: {
      grade: SponsorGrade.ETC,
    },
  },
];

export const tracks: Track[] = [
  {
    type: TrackType.A,
    order: 0,
    title: '팀장님: 우린 내일부터 React + TypeScript로 갑니다.',
    description: 'React와 TypeScript의 실무 도입 경험을 공유하는 발표입니다. 위 기술의 도입을 고민하시는 분들, 기술 스택의 이전을 고민하시는 분들께 제 경험이 도움이 되었으면 합니다.',
    target: 'React와 TypeScript에 관심이 있으나 실무 도입을 고민하는 분들',
  },
  {
    type: TrackType.B,
    order: 0,
    title: '헌집줄게, 새집다오 (리액트 프로젝트 구조 조정)',
    description: '리액트 프로젝트 구조에 대한 내용입니다. 기존에 사용하고 있던 Clean Architecture에서 아쉬웠던 점과 이를 개선하기 위한 여러가지 고민들, 그리고 현재 만들어 가고 있는 방향에 대해 공유합니다.',
    target: '리액트로 하나 이상의 프로젝트를 완료해보셨거나, 진행중이신 분',
  },
  {
    type: TrackType.A,
    order: 1,
    title: 'ES6+ 비동기 프로그래밍과 실전 에러 핸들링',
    description: '콘솔에 찍히는 빨간 글씨들, 비동기 상황에서 나 몰래 터진 에러들, Uncaught..., 자바스크립트가 터뜨리고 있는 수많은 에러들... 잘 핸들링 하고 계신가요? 자바스크립트 표준 방식의 에러 핸들링, 그리고 함수형 해법들에 대해 소개합니다.',
    target: '비동기 상황에서 정확하게 에러 핸들링을 하고 싶은 개발자, 함수형 프로그래밍에서의 에러 처리가 궁금한 개발자',
  },
  {
    type: TrackType.B,
    order: 1,
    title: '비동기를 우아하게 처리하기 위한 Observable',
    description: '그동안 비동기를 다루기 위해서 자바스크립트는 Promise, Generator 등 여러 인터페이스와 API들이 추가되었습니다. 하지만 여전히 DOM 이벤트를 처리하기 위해서는 콜백을 써야하고, 상호작용이 많은 UI는 개발하기 힘듭니다. Observable을 이용하면 비동기 코드를 더 쉽게 다룰 수 있습니다.',
    target: 'Promise 만으로 복잡한 비동기를 처리하는데 한계를 느낀 개발자',
  },
  {
    type: TrackType.A,
    order: 2,
    title: 'React Native로 Native한 애니메이션 구현하기',
    description: 'React Native로 개발하며 느꼈던 기존 애니메이션에 대한 한계와 이를 해결하기 위해 어떠한 방법을 사용했는지, 작동 원리와 구현 방법을 통해 공유하고 싶습니다.',
    target: 'React Native 개발자',
  },
  {
    type: TrackType.B,
    order: 2,
    title: 'Angular + Ionic으로 멀티플랫폼 PWA 개발하기',
    description: '단독으로 백앤드, 프론트앤드 둘 다 맡으며 멀티플랫폼 (Web, iOS, Android) 모바일 앱을 출시했습니다. Ionic이 아니었으면 불가능했을 거라 믿습니다. 한국에는 많지 않은 Ionic 자료 및 경험담, 엑기스만 모아 제공 해드립니다.',
    target: '단기간에 멀티플랫폼 앱을 개발하고 싶으신 분',
  },
  {
    type: TrackType.A,
    order: 3,
    title: 'HTML Canvas 어디까지 써봤니?',
    description: 'AI 분석 결과를 웹 앱을 통해 시각화하면서 겪었던 어려움과 최적화 테크닉들을 공유합니다.',
    target: 'HTML Canvas를 이용한 시각화와 애니메이션에 관심이 많은 개발자',
  },
  {
    type: TrackType.B,
    order: 3,
    title: '프론트엔드에서의 마이크로 서비스 아키텍처',
    description: 'Front-End에서의 Micro-service Architecture는 Side-Effect의 물리적인 차단을 통해 높은 수준의 제품 안정성을 보장 할 수 있도록 합니다. 또한 코드를 작은 단위로 분리해내므로 새로운 Feature를 추가하는데 드는 개발 사이클 시간을 획기적으로 단축 할 수 있습니다. 해당 발표에서는 해당 Architecture 전략에 대한 자세한 설명과 이를 iframe과 postMessage API을 사용한 SDK로 개발, 구현한 방법에 대해 소개합니다.',
    target: '대규모 웹앱 개발에 관심이 있는 개발자',
  },
  {
    type: TrackType.A,
    order: 4,
    title: '좌충우돌 멀티플랫폼 게임 로비 개발기',
    description: '일반적인 개발환경인 PC와 웹 브라우져가 아닐 때 마주칠 수 있는 문제, 큰 골격은 같은데 플랫폼별로 조금씩 다른 요구사항 때문에 생기는 코드의 중복 등을 어떻게 효율적으로 해결할 수 있을까요? 멀티플랫폼 게임 로비를 개발하면서 마주쳤던 문제들과 그 해결방법을 공유하는 발표입니다.',
    target: '멀티플랫폼 환경에서 어떻게 개발이 이뤄질까 궁금하거나 프론트엔드 개발자가 게임 개발에 어떤 기여를 할 수 있는지 궁금한 분',
  },
  {
    type: TrackType.B,
    order: 4,
    title: '3달간 GitHub 스타 3K 받은 Scene.js, Moveable 오픈소스 개발기',
    description: '2019년 5월에 Scene.js 애니메이션 라이브러리, 7월에 Moveable 에디터 툴 라이브러리를 릴리즈하고 3달만에 합쳐서 스타 3K를 받았습니다 . 개발 동기와 과정 그리고 후기, 두 라이브러리의 개발 경험기를 공유합니다.',
    target: '라이브러리 개발, 오픈소스에 관심이 많은 개발자, 애니메이션, 동영상 제작에 관심이 많은 사람',
  },
  {
    type: TrackType.A,
    order: 5,
    title: '진정한 CI/CD를 위한 E2E Test 시작하기',
    description: '"단위 테스트에서는 문제 없던게 배포 후 터져버렸다면, 복잡하고 기능 많은 제품을 개발하고 있다면, 언제든 바로 배포할 수 있게 제품을 유지하려면, QA/QC와의 핑퐁이 힘들다면, 퇴근을 하고 싶다면..." E2E Test를 작성해 보세요. E2E Test의 개념과 장담점을 알아보고, 삽질 했던 경험을 공유합니다.',
    target: '퇴근하고 싶은 프론트엔드 개발자',
  },
  {
    type: TrackType.B,
    order: 5,
    title: '글로벌 서비스를 하게 되면 겪게 될 폰트 렌더링 문제',
    description: '글로벌 서비스를 하며 폰트 문제로 겪었던 수많은 일들이 있었습니다. 디자이너는 맨날 폰트가 다르게 보인다고 합니다. QA는 특정 국가의 언어에서만 화면이 깨진다고 합니다. 반대로, 특정 국가의 언어에서 화면이 깨지는데, QA의 PC에서는 정상적으로 보이는 경우도 있었습니다. 다른 무엇보다 화면이 깨지는 것은 서비스 품질에 대한 의문이 생길 수 있는 요소입니다. 이런 문제를 해결하고자, 폰트의 원리부터 다시 공부하며 정리한 내용들을 공유합니다.',
    target: '글로벌 서비스를 하려는 개발자, 폰트의 세상속으로 깊숙히 빠져보고 싶은 개발자, 왜 폰트가 내 디자인대로 안 나오는지 궁금한 디자이너, 왜 폰트가 다르게 보이는지 디자이너에게 설명을 해야하는 개발자',
  },
  {
    type: TrackType.A,
    order: 6,
    title: 'Angular는 사실 어렵지 않습니다.',
    description: 'Angular는 다른 프레임워크보다 배우기 어렵고 무겁다는 오해를 받고 있습니다. 이 발표에서는 Angular에 대한 오해를 해결하고 다른 프레임워크와 비교했을 때 어떤 점이 비슷하고 어떤 점이 다른지 설명합니다.',
    target: '프론트엔드 프레임워크를 선택하려는 분, 프론트엔드 프레임워크 3대장을 비교하고 싶은 분',
  },
  {
    type: TrackType.B,
    order: 6,
    title: 'Vue.js 입문자가 실무에서 주의해야 할 5가지 특징',
    description: 'Vue.js의 기본 문법을 익힌 사용자가 실제 서비스를 구현할 때 주의해야 할 Vue.js의 특성에 대해서 살펴봅니다. Vue.js의 동작 원리를 정확하게 이해하지 못하고 사용할 때 부딪힐 수 있는 문제점과 코드를 실제 사례 중심으로 살펴볼 예정입니다.',
    target: 'Vue.js의 기본 문법을 익히고 웹 애플리케이션 개발을 시작한 혹은 개발중인 주니어 개발자',
  },
];

export const speakers: Speaker[] = [
  {
    name: '박예준',
    nameEn: 'yejun',
    description: '박예준',
    image: 'yejun.jpg',
    company: getCompany('우아한형제들'),
    track: getTrack(TrackType.A, 0),
    sns: {},
    documentUrl: 'https://drive.google.com/file/d/1k5odHdfXP1yz1uGktTx0BNzDH1kCVRGD/view',
  },
  {
    name: '이소영',
    nameEn: 'soyoung',
    description: '안녕하세요, 0.9년차 프론트엔드 개발자 입니다. 계란찜과 양고기를 좋아하며 만두를 닮았습니다.',
    image: 'soyoung.jpg',
    company: getCompany('뱅크샐러드'),
    track: getTrack(TrackType.B, 0),
    sns: {
      github: 'https://github.com/SoYoung210',
    },
    documentUrl: 'https://drive.google.com/open?id=1o8TDZKDxId-fgdkRPs12xCI_dOGpFGBo',
  },
  {
    name: '유인동',
    nameEn: 'indong',
    description: '마플 CTO',
    image: 'indong.jpg',
    company: getCompany('마플'),
    track: getTrack(TrackType.A, 1),
    sns: {
      github: 'https://github.com/indongyoo',
    },
  },
  {
    name: '나석주',
    nameEn: 'seokju',
    description: '안녕하세요 🙌 맥주와 코딩을 사랑하는 개발자 나석주입니다. 웹 기술을 이용해 퀄리티 높은 UI를 만드는데 관심이 있습니다. React를 주로 다루지만, Angular 프레임워크를 좋아합니다.',
    image: 'seokju.jpg',
    company: getCompany('비바리퍼블리카'),
    track: getTrack(TrackType.B, 1),
    sns: {
      github: 'https://github.com/seokju-na',
    },
    documentUrl: 'https://slides.com/seokjume/observable',
  },
  {
    name: '오창영',
    nameEn: 'changyoung',
    description: '영상통화 서비스 Wave를 React Native로 개발하고 있습니다.',
    image: 'changyoung.jpg',
    company: getCompany('Wave Corporation'),
    track: getTrack(TrackType.A, 2),
    sns: {},
    documentUrl: 'https://drive.google.com/open?id=1nISpM3-i-XqMYch3jV899tQNDI3bCmCu',
  },
  {
    name: '조화수',
    nameEn: 'hwasoo',
    description: '프로덕트를 좋아합니다. 완성도 높은 프로덕트를 개발하기 위해 백앤드, 프론트앤드, UX 무관 뭐든지 열심히 배우고 있습니다. 최근에는 Flutter로 사이드 프로젝트 개발하는 재미에 푹 빠져있습니다.',
    image: 'hwasoo.jpg',
    track: getTrack(TrackType.B, 2),
    sns: {
      twitter: 'https://twitter.com/developerhenry',
    },
    documentUrl: 'https://slides.com/hwasoocho/angular-ionic',
  },
  {
    name: '유상엽',
    nameEn: 'sangyeob',
    description: 'React와 자율출퇴근을 사랑하는 프론트엔드 개발자입니다.',
    image: 'sangyeob.jpg',
    company: getCompany('Lunit Inc.'),
    track: getTrack(TrackType.A, 3),
    sns: {
      link: 'https://medium.com/@Dev_Bono',
    },
    documentUrl: 'https://slides.com/sangyeobyu/html-canvas',
  },
  {
    name: '원지혁',
    nameEn: 'tony',
    description: 'GraphQL과 React를 좋아하는 잡식 개발자입니다. Vue.js로 프론트엔드 개발을 시작해, 현재는 TypeScript와 React.js를 주로 사용합니다. 실시간 교육 서비스인 Erion을 창업해 현재 CTO로 개발중이며, GraphQL Korea와 AWSKRUG GraphQL 소모임에서 Organizer로 활동하고 있습니다.',
    image: 'tony.jpg',
    company: getCompany('Erion Company'),
    track: getTrack(TrackType.B, 3),
    sns: {
      github: 'https://github.com/tonyfromundefined',
    },
    documentUrl: 'https://drive.google.com/file/d/1WCqUEDG0snDgEqIkHifANfap0OWu5nRu/view',
  },
  {
    name: '천민호',
    nameEn: 'minho',
    description: '다른 사람이 봐도 감탄할 수 있는 아키텍처를 설계할 수 있는 사람이 되기 위해 계속해서 고민하는 FE 개발자 입니다.',
    image: 'minho.jpg',
    company: getCompany('PUBG'),
    track: getTrack(TrackType.A, 4),
    sns: {},
    documentUrl: 'https://drive.google.com/open?id=11yerMj6DPPAbU1ibhA4YllJ0k18eKs05',
  },
  {
    name: '최연규',
    nameEn: 'yungyu',
    description: '네이버 FE플랫폼에서 egjs라는 UI컴퍼넌트 오픈소스를 개발하고 있습니다. daybrush라는 이름으로 오픈소스 활동하고 있으며 최근에는 Scene.js와 Moveable 개발해 많은 인기를 끌고 있습니다.',
    image: 'yungyu.jpg',
    company: getCompany('네이버'),
    track: getTrack(TrackType.B, 4),
    sns: {
      github: 'https://github.com/daybrush',
    },
    documentUrl: 'https://drive.google.com/open?id=1VFOUWWaz9NH_niu3caxJ8yTxgVVTgPMT',
  },
  {
    name: '김동우',
    nameEn: 'dongwoo',
    description: '15년 경력의 JavaScript Full Stack 개발자, 모르는 것 빼고 다 아는 잡학다식 개발자. Facebook Developer Circle Seoul 리더, React Korea 운영, 자바스크립트 개발자 포럼 운영',
    image: 'dongwoo.jpg',
    company: getCompany('주식회사 체커'),
    track: getTrack(TrackType.A, 5),
    sns: {
      facebook: 'https://www.facebook.com/woo.gim',
    },
    documentUrl: 'https://docs.google.com/presentation/d/1KSB7zKHX_2h1B50Fcjf4PobPDy9naF4Z4QdW965Y_zg/edit?usp=sharing',
  },
  {
    name: '곽희범',
    nameEn: 'heebeom',
    description: '리눅스용 클라이언트 개발과 Node.js 서버 개발을 하다 JavaScript가 좋아서 프런트엔드 개발을 시작하게 되었습니다. 현재는 LINE Financial Plus에서 주로 글로벌 파이낸셜 서비스를 만들고 있습니다.',
    image: 'heebeom.png',
    company: getCompany('LINE Financial Plus'),
    track: getTrack(TrackType.B, 5),
    sns: {
      link: 'https://norux.me',
    },
    documentUrl: 'https://drive.google.com/open?id=1abjV5imziJNg62ZE5dH5LS4VJK0f3nZf',
  },
  {
    name: '한장현',
    nameEn: 'janghyun',
    description: 'Angular를 더 잘 쓰고 싶어하는 개발자입니다. Angular 공식 한국어 가이드 angular.kr을 운영하고 있습니다.',
    image: 'janghyun.jpg',
    company: getCompany('카카오뱅크'),
    track: getTrack(TrackType.A, 6),
    sns: {
      github: 'https://github.com/han41858',
    },
    documentUrl: 'https://drive.google.com/open?id=1arm3SbaiwzkXnCg37R0nfqcJZzoPpxJp',
  },
  {
    name: '장기효',
    nameEn: 'gihyo',
    description: '재밌는 지식과 기술을 정리해 공유하는 걸 좋아하는 현직 프런트엔드 개발자. 틈틈이 오프라인 강의와 온라인 강의를 진행하고 있으며 Do it! Vue.js 입문 책을 집필했다. 맛있는 맥주와 마블 시리즈를 좋아한다.',
    image: 'gihyo.jpg',
    company: getCompany('KossLab'),
    track: getTrack(TrackType.B, 6),
    sns: {
      github: 'https://github.com/joshua1988/',
    },
    documentUrl: 'https://drive.google.com/open?id=0B3AcM_ZW0sOceDJVNHZYTHR6MlVRbWt2LXRCWVAzLTMyTHNN',
  },
];

export function getCompany(name: string) {
  return companies.find(c => c.name === name);
}

export function getTrack(type: TrackType, order: number) {
  return tracks.find(t => t.type === type && t.order === order);
}

export function getSpeakers(type: TrackType) {
  return speakers.filter(s => s.track.type === type).sort((a, b) => a.track.order - b.track.order);
}

export function getSponsors() {
  return companies.filter(c => !!c.sponsor);
}
