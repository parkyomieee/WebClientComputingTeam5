const foodList = {

  TTEOKBOKKI: {
    name: "떡볶이",
    emoji: "🌶️",
    src: "images/tteokbokki.jpg",
    category: "한식 · 분식",
    description: "너무 간단한데 맛있어서 놀라는 백종원 분식점 떡볶이! 고추장과 고추가루를 함께 써서 색도 예쁘고 맛도 깊어요.",
    time: "15분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "떡볶이떡", amount: 1,    unit: "컵" },
      { name: "물",       amount: 1,    unit: "컵" },
      { name: "대파",     amount: 0.25, unit: "대" },
      { name: "통깨",     amount: 1,    unit: "약간" },
      { name: "고추장",   amount: 1,    unit: "큰술" },
      { name: "고추가루", amount: 0.75, unit: "큰술" },
      { name: "간장",     amount: 1,    unit: "큰술" },
      { name: "설탕",     amount: 1.5,  unit: "큰술" }
    ],
    steps: [
      { title: "떡 끓이기",  text: "물 1컵에 떡볶이떡을 넣고 센불에서 팔팔 끓여주세요. 냉동 떡이라면 미리 물에 잠깐 담궈두었다가 사용해주세요." },
      { title: "양념 넣기",  text: "물이 끓으면 고추장, 고추가루, 간장, 설탕을 모두 넣어준 뒤 잘 풀어주고 자글자글 끓여주세요." },
      { title: "토핑 추가",  text: "원하는 토핑이 있다면 이 단계에서 넣어주세요. 어묵은 미리, 치즈는 마지막에 올려주세요." },
      { title: "마무리",     text: "국물이 졸아들면 대파를 가위로 쫑쫑 썰어 넣어주시고 통깨를 약간 뿌려주세요. 완성! 🎉" }
    ],
    optionSteps: {
      spicyLevel: {
        '순한맛':     { afterStep: 1, text: '💡 순한맛: 고추장을 0.5큰술, 고추가루는 생략해주세요.' },
        '보통맛':     null,
        '매운맛':     { afterStep: 1, text: '💡 매운맛: 고추장을 1큰술 더 추가하고 청양고추 1개를 썰어 넣어주세요.' },
        '아주 매운맛':{ afterStep: 1, text: '💡 아주 매운맛: 고추장 2큰술 추가, 청양고추 2개를 씨째로 넣어주세요!' },
      },
      saltyLevel: {
        '싱겁게':   { afterStep: 1, text: '💡 싱겁게: 간장을 0.5큰술로 줄여주세요.' },
        '보통':     null,
        '짭짤하게': { afterStep: 1, text: '💡 짭짤하게: 간장을 0.5큰술 더 추가해주세요.' },
      },
      topping: {
        '햄':    { afterStep: 0, text: '💡 햄을 먹기 좋은 크기로 썰어 떡과 함께 넣어주세요.' },
        '양배추':{ afterStep: 0, text: '💡 양배추를 한 입 크기로 썰어 준비해주세요.' },
        '치즈':  { afterStep: 3, text: '💡 불을 끄기 직전 슬라이스 치즈를 올려 녹여주세요.' },
        '소시지':{ afterStep: 0, text: '💡 소시지를 어슷썰어 준비해주세요.' },
        '차돌박이': { afterStep: 1, text: '💡 차돌박이를 양념에 함께 넣고 익혀주세요.' },
        '김말이':{ afterStep: 2, text: '💡 김말이를 함께 넣고 끓여주세요.' },
        '만두':  { afterStep: 2, text: '💡 냉동 만두를 함께 넣고 익혀주세요.' },
        '오뎅':  { afterStep: 0, text: '💡 어묵을 먹기 좋게 잘라 처음부터 함께 끓여주세요.' },
      },
    },
    tips: [
      { icon: "💡", title: "냉동 떡은 미리 불려주세요!", text: "냉동 떡이라면 물에 잠깐 담궈두었다가 사용하면 훨씬 부드러워요." },
      { icon: "🍬", title: "단맛 조절!", text: "평소 단맛을 싫어하시면 설탕을 약간 줄여주세요." },
      { icon: "🐟", title: "어묵 추가!", text: "기호에 따라 어묵을 약간 넣어주시면 더 든든해요." }
    ],
    related: ["KIMCHI_RICE", "DOENJANG", "KIMCHI_JJIGAE"]
  },

  KIMCHI_RICE: {
    name: "김치볶음밥",
    emoji: "🍳",
    src: "images/kimchi_rice.jpg",
    category: "한식 · 볶음",
    description: "전혀 새로운 맛의 김치볶음밥! 마요네즈와 된장이 들어가 깊고 고소한 맛이 나는 특별한 레시피예요.",
    time: "10분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "김치",     amount: 0.5,  unit: "컵" },
      { name: "밥",       amount: 1,    unit: "공기 (햇반 210g)" },
      { name: "식용유",   amount: 1.5,  unit: "스푼" },
      { name: "설탕",     amount: 0.5,  unit: "스푼" },
      { name: "진간장",   amount: 0.5,  unit: "스푼" },
      { name: "고추가루", amount: 0.5,  unit: "스푼" },
      { name: "참기름",   amount: 1,    unit: "스푼" },
      { name: "마요네즈", amount: 0.5,  unit: "스푼" },
      { name: "된장",     amount: 0.17, unit: "스푼" },
      { name: "파",       amount: 1,    unit: "큰술" },
      { name: "계란",     amount: 1,    unit: "개" }
    ],
    steps: [
      { title: "김치 썰기",      text: "김치 0.5컵을 잘게 썰어주세요. 새김치보다 살짝 익은 김치가 더 맛있어요." },
      { title: "양념에 버무려 볶기", text: "김치에 모든 양념을 넣고 잘 비벼주세요. 식용유를 두른 달군 팬에 재료를 고루 펴서 부어주고 뚜껑을 덮어 1분간 그대로 두세요.", time: "1분" },
      { title: "밥 넣기",        text: "뚜껑을 열고 수분이 거의 남지 않는 꾸덕한 상태인지 확인해주세요. 수분이 많으면 1분 더 볶아주시고, 날아간 상태라면 밥 1공기를 넣고 볶아주세요." },
      { title: "밥 펴서 굽기",   text: "흰밥이 보이지 않을 정도로 고루 섞어준 다음 팬에 골고루 펴고 뚜껑을 덮어 센불에 20~30초간 두세요.", time: "30초" },
      { title: "계란후라이",     text: "별도 팬에 식용유를 살짝 두르고 계란을 깨서 익혀주세요. 볶음밥 위에 올려주세요.", time: "2분" },
      { title: "완성",           text: "계란후라이를 올린 김치볶음밥 완성! 🎉" }
    ],
    optionSteps: {
      spicyLevel: {
        '순한맛': { afterStep: 1, text: '💡 순한맛: 고추가루를 생략해주세요.' },
        '보통맛': null,
        '매운맛': { afterStep: 1, text: '💡 매운맛: 고추가루를 0.5스푼 더 추가하고 청양고추 1개를 잘게 썰어 넣어주세요.' },
      },
      eggStyle: {
        '없음':  { removeStep: 4, text: '' },
        '반숙':  { modifyStep: 4, text: '별도 팬에 식용유를 두르고 계란을 깨서 넣어주세요. 흰자가 익으면 바로 불을 꺼주세요. 노른자가 살짝 흐르는 반숙 완성! 볶음밥 위에 올려주세요.', time: "2분" },
        '완숙':  { modifyStep: 4, text: '별도 팬에 식용유를 두르고 계란을 깨서 넣어주세요. 뚜껑을 덮어 2~3분 완전히 익혀주세요. 볶음밥 위에 올려주세요.', time: "3분" },
      },
      topping: {
        '햄':      { afterStep: 0, text: '💡 햄을 먹기 좋은 크기로 썰어 김치와 함께 볶아주세요.' },
        '참치':    { afterStep: 0, text: '💡 참치 캔의 기름을 빼고 김치와 함께 볶아주세요.' },
        '소시지':  { afterStep: 0, text: '💡 소시지를 어슷썰어 김치와 함께 볶아주세요.' },
        '돼지고기':{ afterStep: 0, text: '💡 돼지고기를 먼저 팬에 볶아 익힌 후 김치를 넣어주세요.' },
        '치즈':    { afterStep: 4, text: '💡 완성된 볶음밥 위에 슬라이스 치즈를 올려 잔열로 녹여주세요.' },
        '양파':    { afterStep: 0, text: '💡 양파를 잘게 썰어 김치와 함께 볶아주세요.' },
        '당근':    { afterStep: 0, text: '💡 당근을 잘게 다져 김치와 함께 볶아주세요.' },
        '김가루':  { afterStep: 5, text: '💡 완성된 볶음밥 위에 김가루를 뿌려주세요.' },
      },
    },
    tips: [
      { icon: "💡", title: "살짝 익은 김치를 사용해주세요!", text: "새김치는 수분이 많아 볶음밥이 질어져요." },
      { icon: "🥢", title: "깍두기도 OK!", text: "살짝 익은 깍두기를 잘게 다져서 써도 맛있어요." },
      { icon: "🔥", title: "마지막에 센불!", text: "밥을 펴고 뚜껑 덮어 센불에 20~30초 두면 누룽지 느낌이 나서 더 맛있어요." }
    ],
    related: ["TTEOKBOKKI", "KIMCHI_JJIGAE", "DOENJANG"]
  },

  DAK_BOKKEUM: {
    name: "닭볶음탕",
    emoji: "🍗",
    src: "images/dak_bokkeum.jpg",
    category: "한식 · 찜·탕",
    description: "맛집 닭볶음탕 거의 흡사한 맛! 자취생은 닭 반 마리로 도전해보세요.",
    time: "60분",
    difficulty: "★★☆",
    diffLabel: "보통",
    ingredients: [
      { name: "닭",          amount: 0.5,  unit: "마리" },
      { name: "감자",        amount: 1,    unit: "개" },
      { name: "당근",        amount: 0.25, unit: "쪽" },
      { name: "양파",        amount: 0.5,  unit: "개" },
      { name: "고추",        amount: 1,    unit: "개" },
      { name: "대파",        amount: 0.5,  unit: "대" },
      { name: "다진마늘",    amount: 2,    unit: "쪽" },
      { name: "우유",        amount: 100,  unit: "ml" },
      { name: "간장",        amount: 5,    unit: "큰술" },
      { name: "고추장",      amount: 2,    unit: "큰술" },
      { name: "고춧가루",    amount: 1,    unit: "큰술" },
      { name: "요리당",      amount: 3,    unit: "큰술" },
      { name: "청주",        amount: 0.5,  unit: "큰술" },
      { name: "액젓",        amount: 0.5,  unit: "큰술" },
      { name: "물",          amount: 400,  unit: "ml" },
      { name: "당면 (선택)", amount: 1,    unit: "약간" },
      { name: "참기름",      amount: 1,    unit: "약간" },
      { name: "후추",        amount: 1,    unit: "약간" }
    ],
    steps: [
      { title: "닭 손질",          text: "닭을 깨끗이 씻고 기름을 제거해주세요. 우유 100ml에 30분 담가두세요.", time: "30분" },
      { title: "닭 데치기",        text: "우유에서 꺼낸 닭을 한번 후루룩 끓여준 뒤 차가운 물로 헹궈주세요.", time: "5분" },
      { title: "양념장 만들기",    text: "간장, 고추장, 고춧가루, 요리당, 다진마늘, 청주, 액젓, 후추를 섞어 양념장을 만들어주세요." },
      { title: "닭에 양념 넣고 끓이기", text: "냄비에 닭과 양념장, 물 400ml를 부어 한소끔 끓여주세요.", time: "5분" },
      { title: "감자 넣고 졸이기", text: "끓으면 감자를 모서리를 깎아 넣고 뚜껑 덮어 중불에서 30분 끓여주세요.", time: "30분" },
      { title: "채소 넣기",        text: "대파, 양파, 당근, 고추를 적당한 크기로 잘라 넣고 한번 더 끓여주세요.", time: "5분" },
      { title: "마무리",           text: "참기름을 살짝 두르면 완성! 🎉" }
    ],
    optionSteps: {
      spicyLevel: {
        '순한맛': { afterStep: 2, text: '💡 순한맛: 고추장을 1큰술, 고춧가루는 생략해주세요.' },
        '보통맛': null,
        '매운맛': { afterStep: 2, text: '💡 매운맛: 고추장을 1큰술 더 추가하고 청양고추 1개를 넣어주세요.' },
      },
      saltyLevel: {
        '싱겁게':   { afterStep: 2, text: '💡 싱겁게: 간장을 3큰술로 줄여주세요.' },
        '보통':     null,
        '짭짤하게': { afterStep: 2, text: '💡 짭짤하게: 간장을 1큰술 더 추가해주세요.' },
      },
      topping: {
        '감자':    null,
        '고구마':  { afterStep: 4, text: '💡 고구마를 감자 대신 또는 함께 넣어주세요. 달콤한 맛이 어울려요.' },
        '떡':      { afterStep: 5, text: '💡 떡을 채소와 함께 넣고 끓여주세요.' },
        '라면사리':{ afterStep: 5, text: '💡 라면사리를 마지막 5분 전에 넣고 끓여주세요.' },
        '당면':    { afterStep: 5, text: '💡 미리 불려둔 당면을 채소와 함께 넣어주세요.' },
        '파':      null,
        '당근':    null,
        '무':      { afterStep: 4, text: '💡 무를 큼직하게 썰어 감자와 함께 넣어주세요.' },
      },
      endMeal: {
        '없음':       null,
        '볶음밥 추가': { afterStep: 6, text: '💡 볶음밥: 닭을 다 먹은 후 남은 양념에 밥 1공기를 넣고 센불에서 볶아주세요. 고소하고 맛있어요!' },
      },
    },
    tips: [
      { icon: "🥛", title: "우유에 재우면 잡내가 없어요!", text: "닭을 우유에 30분 담가두면 잡내가 없어지고 훨씬 맛있어요." },
      { icon: "🥔", title: "감자 모서리를 깎아주세요!", text: "감자 모서리를 깎아서 넣어야 으깨지지 않아요." },
      { icon: "💧", title: "국물 양 조절!", text: "당면 넣을 때는 물 600ml, 안 넣을 때는 400ml가 적당해요." }
    ],
    related: ["KIMCHI_JJIGAE", "DOENJANG", "KIMCHI_RICE"]
  },

  SHABU: {
    name: "샤브샤브",
    emoji: "🍲",
    src: "images/shabu.jpg",
    category: "한식 · 전골",
    description: "가쓰오부시 장국으로 만드는 간단 샤브샤브! 마지막에 계란죽까지 해먹으면 완벽한 한 끼예요.",
    time: "25분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "업진살 소고기 (샤브용)",     amount: 200, unit: "g" },
      { name: "청경채",                     amount: 0.5, unit: "봉지" },
      { name: "숙주",                       amount: 0.5, unit: "봉지" },
      { name: "배추",                       amount: 0.5, unit: "봉지" },
      { name: "국수장국가쓰오부시",         amount: 60,  unit: "ml" },
      { name: "물",                         amount: 1,   unit: "적당량" },
      { name: "밥 (마무리용, 선택)",        amount: 1,   unit: "공기" },
      { name: "계란 (마무리용, 선택)",      amount: 1,   unit: "개" },
      { name: "김가루 (마무리용, 선택)",    amount: 1,   unit: "약간" }
    ],
    steps: [
      { title: "육수 준비",          text: "냄비에 물을 넣고 가쓰오부시 장국 60ml를 부은 후 끓여주세요.", time: "5분" },
      { title: "채소 준비",          text: "청경채와 숙주나물을 깨끗이 씻어 준비해주세요. 배추도 먹기 좋게 뜯어두세요." },
      { title: "채소 넣기",          text: "육수가 끓으면 배추, 청경채, 숙주를 넣고 살짝 끓여주세요.", time: "2분" },
      { title: "고기 익히기",        text: "고기를 육수에 넣어주세요. 고기가 익으면 소스에 찍어 드세요!" },
      { title: "마무리 식사 (선택)", text: "남은 육수에 밥을 넣고 끓이다가 계란을 깨서 넣어주세요. 김가루를 뿌리면 완성! 🎉" }
    ],
    optionSteps: {
      brothType: {
        '맑은 육수':    { modifyStep: 0, text: '냄비에 물을 넣고 가쓰오부시 장국 60ml를 부은 후 끓여주세요. 담백한 맑은 육수예요.', time: "5분" },
        '얼큰한 육수':  { modifyStep: 0, text: '냄비에 물을 넣고 가쓰오부시 장국 60ml + 고춧가루 1큰술을 넣어 얼큰하게 끓여주세요.', time: "5분" },
        '스키야키 육수':{ modifyStep: 0, text: '냄비에 물 + 간장 2큰술 + 미림 1큰술 + 설탕 1큰술을 넣어 달콤짭짤한 스키야키 육수를 만들어주세요.', time: "5분" },
        '마라 육수':    { modifyStep: 0, text: '시판 마라 육수 베이스를 물에 섞어 끓여주세요. 마라의 얼얼한 맛을 즐겨보세요!', time: "5분" },
      },
      endMeal: {
        '볶음밥': { modifyStep: 4, text: '남은 육수에 밥 1공기를 넣고 볶아주세요. 계란과 김가루를 추가하면 완벽해요! 🎉' },
        '칼국수': { modifyStep: 4, text: '남은 육수에 칼국수 면을 넣고 3~4분 끓여주세요. 쫄깃한 마무리! 🎉', time: "4분" },
        '죽':     { modifyStep: 4, text: '남은 육수에 밥을 넣고 약불에서 5분 끓이다가 계란을 풀어 넣어주세요. 따뜻한 죽 완성! 🎉', time: "5분" },
      },
    },
    tips: [
      { icon: "🛒", title: "장국은 시판으로!", text: "가쓰오부시 장국은 마트에서 쉽게 구할 수 있어요." },
      { icon: "🍖", title: "고기는 살짝만!", text: "얇은 고기는 육수에 담갔다 바로 빼서 드세요. 오래 두면 질겨져요." },
      { icon: "🍚", title: "마무리 계란죽 강추!", text: "남은 육수에 밥이랑 계란 넣고 끓이면 황금 마무리!" }
    ],
    related: ["DOENJANG", "MIYEOK", "DAK_BOKKEUM"]
  },

  DOENJANG: {
    name: "된장찌개",
    emoji: "🫕",
    src: "images/doenjang.jpg",
    category: "한식 · 찌개",
    description: "뚝배기에 글글 끓인 든든한 된장찌개! 느타리버섯과 두부가 듬뿍 들어가 건강하고 맛있어요.",
    time: "20분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "느타리버섯", amount: 1,    unit: "줌" },
      { name: "양파",       amount: 0.5,  unit: "개" },
      { name: "애호박",     amount: 0.25, unit: "개" },
      { name: "청양고추",   amount: 2,    unit: "개" },
      { name: "두부",       amount: 0.25, unit: "모" },
      { name: "물",         amount: 1.5,  unit: "종이컵" },
      { name: "된장",       amount: 2,    unit: "큰술" },
      { name: "진간장",     amount: 1,    unit: "큰술" },
      { name: "고추가루",   amount: 1.5,  unit: "큰술" },
      { name: "다진 마늘",  amount: 0.5,  unit: "큰술" },
      { name: "설탕",       amount: 0.5,  unit: "작은술" },
      { name: "소금",       amount: 1,    unit: "간맞추기" }
    ],
    steps: [
      { title: "육수 끓이기", text: "물 1.5종이컵에 된장, 고추가루, 다진 마늘, 설탕, 간장을 한데 넣고 한소끔 끓여주세요." },
      { title: "재료 썰기",  text: "양파, 버섯, 애호박, 청양고추, 두부를 적당한 크기로 썰어주세요." },
      { title: "재료 넣기",  text: "한소끔 끓은 된장물에 양파, 버섯, 애호박, 청양고추, 두부를 넣어주세요." },
      { title: "마무리",     text: "애호박이 익을 때까지 끓여주세요. 간을 보아 부족하면 소금으로 맞춰주시면 완성! 🎉" }
    ],
    optionSteps: {
      spicyLevel: {
        '안 맵게':  { afterStep: 0, text: '💡 안 맵게: 청양고추와 고추가루를 생략해주세요.' },
        '보통':     null,
        '칼칼하게': { afterStep: 0, text: '💡 칼칼하게: 청양고추를 1개 더 추가하고 고추가루를 0.5큰술 늘려주세요.' },
      },
      saltyLevel: {
        '싱겁게':   { afterStep: 3, text: '💡 싱겁게: 간장을 0.5큰술로 줄이고 소금은 생략해주세요.' },
        '보통':     null,
        '짭짤하게': { afterStep: 3, text: '💡 짭짤하게: 마지막에 소금을 조금 더 추가해주세요.' },
      },
      topping: {
        '두부':      null,
        '돼지고기':  { afterStep: 0, text: '💡 돼지고기를 먼저 냄비에 볶은 후 육수를 넣어주세요.' },
        '차돌박이':  { afterStep: 0, text: '💡 차돌박이를 처음 단계에서 함께 끓여주세요.' },
        '양파':      null,
        '호박':      null,
        '감자':      { afterStep: 1, text: '💡 감자를 깍둑썰어 다른 채소보다 먼저 넣어 충분히 익혀주세요.' },
        '버섯':      null,
        '바지락':    { afterStep: 0, text: '💡 바지락을 미리 해감해 육수에 넣어 시원한 국물을 내주세요.' },
      },
    },
    tips: [
      { icon: "🍄", title: "버섯은 자유롭게!", text: "느타리버섯 대신 표고버섯, 팽이버섯 등 아무거나 써도 돼요." },
      { icon: "🌶️", title: "청양고추로 칼칼하게!", text: "청양고추를 넣으면 칼칼한 맛이 살아나요." },
      { icon: "🧂", title: "소금은 마지막에!", text: "된장과 간장이 들어가서 짤 수 있어요. 마지막에 간 보고 추가해주세요." }
    ],
    related: ["KIMCHI_JJIGAE", "KIMCHI_RICE", "TTEOKBOKKI"]
  },

  KIMCHI_JJIGAE: {
    name: "김치찌개",
    emoji: "🍲",
    src: "images/kimchi_jjigae.jpg",
    category: "한식 · 찌개",
    description: "참치 캔 하나로 뚝딱! 20분이면 완성되는 자취생 김치찌개. 묵은 김치가 있으면 더 맛있어요.",
    time: "20분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "김치",          amount: 100,  unit: "g" },
      { name: "참치",          amount: 0.5,  unit: "캔" },
      { name: "두부",          amount: 0.25, unit: "모" },
      { name: "대파",          amount: 1,    unit: "약간" },
      { name: "포도씨유",      amount: 0.5,  unit: "큰술" },
      { name: "고춧가루",      amount: 1,    unit: "약간" },
      { name: "다진 마늘",     amount: 0.5,  unit: "큰술" },
      { name: "설탕",          amount: 1,    unit: "약간" },
      { name: "물 (멸치육수)", amount: 300,  unit: "ml" }
    ],
    steps: [
      { title: "김치 볶기",   text: "냄비에 포도씨유를 두르고 김치를 넣어 중불에서 볶아주세요. 설탕과 고춧가루를 넣으면 색이 예뻐지고 윤이 나요.", time: "3분" },
      { title: "마늘 추가",   text: "볶는 중간에 다진 마늘을 넣어주세요." },
      { title: "물 붓고 끓이기", text: "물 또는 멸치육수 300ml를 붓고 참치를 넣어주세요. 강불로 끓여주세요.", time: "5분" },
      { title: "마무리",      text: "끓어오르면 두부와 대파를 넣고 중불로 줄여 5분 더 끓여주시면 완성! 🎉", time: "5분" }
    ],
    optionSteps: {
      spicyLevel: {
        '순한맛': { afterStep: 0, text: '💡 순한맛: 고춧가루를 생략하고 김치도 덜 넣어주세요.' },
        '보통맛': null,
        '매운맛': { afterStep: 0, text: '💡 매운맛: 고춧가루를 0.5큰술 더 추가하고 청양고추 1개를 넣어주세요.' },
      },
      saltyLevel: {
        '싱겁게':   { afterStep: 3, text: '💡 싱겁게: 참치 캔 기름은 빼고 넣어주세요.' },
        '보통':     null,
        '짭짤하게': { afterStep: 3, text: '💡 짭짤하게: 참치 캔 기름을 함께 넣어주세요. 간이 더 깊어져요.' },
      },
      topping: {
        '두부':      null,
        '햄':        { afterStep: 2, text: '💡 햄을 먹기 좋은 크기로 썰어 참치와 함께 넣어주세요.' },
        '돼지고기':  { afterStep: 0, text: '💡 돼지고기를 김치와 함께 먼저 볶아주세요.' },
        '차돌박이':  { afterStep: 0, text: '💡 차돌박이를 김치와 함께 볶아 기름을 내주세요.' },
        '양파':      { afterStep: 1, text: '💡 양파를 굵게 썰어 넣어주세요.' },
        '라면사리':  { afterStep: 2, text: '💡 라면사리를 끓는 육수에 넣고 2분 더 끓여주세요.', time: "2분" },
        '만두':      { afterStep: 2, text: '💡 냉동 만두를 넣고 함께 끓여주세요.' },
        '떡':        { afterStep: 2, text: '💡 떡을 넣고 함께 끓여주세요.' },
      },
    },
    tips: [
      { icon: "💡", title: "묵은 김치를 쓰면 더 맛있어요!", text: "오래 익은 김치를 쓸수록 국물이 깊고 진해져요." },
      { icon: "🐟", title: "참치 기름도 같이!", text: "참치 캔의 기름도 같이 넣으면 국물이 더 고소해져요." },
      { icon: "🔥", title: "처음엔 강불!", text: "처음 끓일 때 강불로 확 끓여야 맛이 살아나요." }
    ],
    related: ["DOENJANG", "KIMCHI_RICE", "DAK_BOKKEUM"]
  },

  MIYEOK: {
    name: "미역국",
    emoji: "🥣",
    src: "images/miyeok.jpg",
    category: "한식 · 국",
    description: "뽀얗고 진한 미역국! 소고기 없어도 OK. 미역을 참기름에 바짝 볶는 게 핵심이에요.",
    time: "30분",
    difficulty: "★☆☆",
    diffLabel: "쉬움",
    ingredients: [
      { name: "건미역 (말린 것)",     amount: 5,    unit: "g" },
      { name: "소고기 국거리 (선택)", amount: 50,   unit: "g" },
      { name: "참기름",               amount: 1,    unit: "넉넉히" },
      { name: "다진마늘",             amount: 0.5,  unit: "큰술" },
      { name: "간장",                 amount: 0.5,  unit: "큰술" },
      { name: "된장",                 amount: 0.25, unit: "작은술" },
      { name: "소금",                 amount: 1,    unit: "간맞추기" },
      { name: "물",                   amount: 1,    unit: "적당량" }
    ],
    steps: [
      { title: "미역 불리기",      text: "미역을 물에 담궈 불려주세요. 불린 미역은 가위로 잘게 잘라주세요.", time: "10~15분" },
      { title: "미역 볶기",        text: "불린 미역을 냄비에 넣고 참기름을 넉넉히 두른 후 센불에서 볶아주세요. 냄비에 달라붙을 지경이 될 때까지 바짝 볶아주세요. 이게 포인트!" },
      { title: "물 조금만 붓기",   text: "볶아진 미역에 물을 미역이 잠기지 않을 정도로만 부어주고 다진마늘을 넣어 센불에 끓여주세요." },
      { title: "물 추가 & 간 맞추기", text: "물이 줄어들면 물을 미역이 잠길만큼 부어주세요. 간장, 된장, 소금으로 간을 맞춰주세요." },
      { title: "마무리",           text: "원하는 물 높이로 물을 넣고 센불에 끓여주시면 완성! 🎉" }
    ],
    optionSteps: {
      soupAmount: {
        '자작하게': { afterStep: 2, text: '💡 자작하게: 물을 미역이 살짝 잠길 정도로만 넣어주세요. 진한 국물이 완성돼요.' },
        '보통':     null,
        '넉넉하게': { afterStep: 2, text: '💡 넉넉하게: 물을 충분히 넣어주세요. 마지막에 간을 다시 한번 확인해주세요.' },
      },
      saltyLevel: {
        '싱겁게':   { afterStep: 3, text: '💡 싱겁게: 간장을 생략하고 소금으로만 살짝 간을 맞춰주세요.' },
        '보통':     null,
        '짭짤하게': { afterStep: 3, text: '💡 짭짤하게: 간장을 0.5큰술 더 추가해주세요.' },
      },
      topping: {
        '조개':    { afterStep: 1, text: '💡 조개를 미역과 함께 볶아 시원한 국물을 내주세요.' },
        '소고기':  { afterStep: 1, text: '💡 소고기를 미역과 함께 참기름에 먼저 볶아주세요. 고소한 맛이 살아나요.' },
        '굴':      { afterStep: 2, text: '💡 굴은 마지막에 넣어주세요. 오래 끓이면 질겨져요.' },
        '들깨':    { afterStep: 4, text: '💡 들깨가루를 완성 직전에 넣어주세요. 고소한 맛이 배가돼요.' },
        '옹심이':  { afterStep: 3, text: '💡 옹심이를 넣고 3~4분 더 끓여주세요.', time: "4분" },
        '황태':    { afterStep: 1, text: '💡 황태채를 미역과 함께 볶아 깊은 맛을 내주세요.' },
        '표고버섯':{ afterStep: 2, text: '💡 표고버섯을 얇게 썰어 함께 넣어주세요.' },
        '두부':    { afterStep: 3, text: '💡 두부를 깍둑썰어 마지막에 넣어주세요.' },
      },
    },
    tips: [
      { icon: "🔥", title: "참기름에 바짝 볶는 게 핵심!", text: "미역이 냄비에 달라붙을 정도로 바짝 볶아야 국물이 뽀얗게 나와요." },
      { icon: "💧", title: "물은 조금씩 부어주세요!", text: "처음엔 물을 적게 부어야 해요. 국물이 진하게 우러나와요." },
      { icon: "🦐", title: "재료 추가 가능!", text: "홍합이나 새우를 추가하면 더 풍성한 미역국을 즐길 수 있어요." }
    ],
    related: ["DOENJANG", "KIMCHI_JJIGAE", "SHABU"]
  },

  AGLIO_OLIO: {
    name: "알리오올리오 파스타",
    emoji: "🍝",
    src: "images/aglio_olio.jpg",
    category: "양식 · 파스타",
    description: "초간단 백종원 알리오올리오! 올리브유, 마늘, 면수만 있으면 맛집 파스타 완성이에요.",
    time: "20분",
    difficulty: "★★☆",
    diffLabel: "보통",
    ingredients: [
      { name: "스파게티면",        amount: 100, unit: "g (1인분)" },
      { name: "올리브유",          amount: 4,   unit: "큰술" },
      { name: "통마늘",            amount: 2,   unit: "개" },
      { name: "다진마늘",          amount: 0.5, unit: "큰술" },
      { name: "페페론치니",        amount: 1,   unit: "개" },
      { name: "소금 (면 삶는 용)", amount: 1,   unit: "큰술" },
      { name: "소금 (간 맞추기)",  amount: 1,   unit: "약간" },
      { name: "면수",              amount: 1,   unit: "국자" }
    ],
    steps: [
      { title: "재료 준비",    text: "마늘은 얇게 편으로 썰어주세요. 페페론치니는 2~3조각으로 부숴서 씨까지 함께 준비해주세요." },
      { title: "면 삶기",      text: "물을 팔팔 끓여주세요. 소금 1큰술을 넣은 다음 파스타면을 넣어주시고 7~8분 중불에서 익혀주세요. 면수는 꼭 1국자 남겨두세요!", time: "7~8분" },
      { title: "마늘 볶기",    text: "팬에 올리브유, 다진마늘, 편썬 마늘, 페페론치니를 넣고 중불에서 달달달 볶아주세요." },
      { title: "마늘 익히기",  text: "마늘이 어느 정도 익으면 약불로 줄여주세요. 타지 않는 선에서 잘 익었으면 잠시 불을 꺼두세요." },
      { title: "면과 면수 넣기", text: "삶아진 파스타면을 바로 건져내서 팬에 넣어주시고 면수 1국자를 넣어주세요. 중불에서 달달 볶아주시고 소금으로 간을 맞춰주시면 완성! 🎉", time: "2분" }
    ],
    optionSteps: {
      spicyTopping: {
        '없음':       { afterStep: 0, text: '💡 매운 재료는 생략하고 마늘만 볶아주세요.' },
        '페페론치노': { afterStep: 0, text: '💡 페페론치노를 2개로 늘려 씨째로 넣어주세요. 많이 매워요!' },
        '고춧가루':   { afterStep: 2, text: '💡 고춧가루 0.5큰술을 마늘 볶을 때 함께 넣어주세요.' },
        '둘 다':      { afterStep: 2, text: '💡 페페론치노와 고춧가루를 함께 넣어주세요. 매우 매울 수 있어요!' },
      },
      herb: {
        '없음':   null,
        '파슬리': { afterStep: 4, text: '💡 완성 후 파슬리를 뿌려주세요. 이탈리안 느낌이 살아나요.' },
        '대파':   { afterStep: 2, text: '💡 대파를 잘게 썰어 마늘과 함께 볶아주세요.' },
        '둘 다':  { afterStep: 2, text: '💡 대파는 마늘과 함께 볶고, 파슬리는 완성 후 뿌려주세요.' },
      },
      saltyLevel: {
        '싱겁게':   { afterStep: 4, text: '💡 싱겁게: 소금 간은 최소한으로 해주세요. 면수로만 간을 맞춰도 돼요.' },
        '보통':     null,
        '짭짤하게': { afterStep: 4, text: '💡 짭짤하게: 소금을 조금 더 추가해주세요.' },
      },
      topping: {
        '베이컨':    { afterStep: 2, text: '💡 베이컨을 마늘과 함께 볶아 기름을 내주세요.' },
        '새우':      { afterStep: 2, text: '💡 새우를 마늘과 함께 볶아주세요. 새우가 분홍빛이 되면 완성이에요.' },
        '양파':      { afterStep: 0, text: '💡 양파를 얇게 채 썰어 준비해주세요.' },
        '양송이버섯':{ afterStep: 2, text: '💡 양송이버섯을 마늘과 함께 볶아주세요.' },
        '바지락':    { afterStep: 2, text: '💡 바지락을 마늘 볶을 때 함께 넣어 조개 입이 열릴 때까지 볶아주세요.' },
        '방울토마토':{ afterStep: 3, text: '💡 방울토마토를 반으로 잘라 면 넣기 직전에 팬에 넣어주세요.' },
        '브로콜리':  { afterStep: 1, text: '💡 브로콜리를 면 삶는 물에 1분간 데쳐두었다가 면과 함께 넣어주세요.' },
        '치즈':      { afterStep: 4, text: '💡 완성 후 파마산 치즈나 슬라이스 치즈를 올려주세요.' },
      },
    },
    tips: [
      { icon: "🧄", title: "마늘 절대 태우지 마세요!", text: "마늘이 타면 쓴맛이 나요. 약불에서 천천히 볶아주세요." },
      { icon: "💧", title: "면수가 오늘의 포인트!", text: "면수 1국자를 넣어야 소스가 만들어져요. 절대 버리지 마세요!" },
      { icon: "🌶️", title: "페페론치니 매운맛 주의!", text: "씨까지 넣으면 굉장히 매워요. 취향에 맞게 조절해주세요." }
    ],
    related: ["KIMCHI_RICE", "TTEOKBOKKI", "SHABU"]
  }

};
