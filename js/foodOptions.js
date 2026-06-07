// =============================================
//  음식별 옵션 데이터 + 재료 변화값
//  foodOptions.js
//  - form.js 의 menuForms 대체
//  - recipe.html 에서 파라미터 읽어 재료/조리법 반영
// =============================================

// ── form key ↔ foodData key 매핑 ─────────────
const menuKeyToFoodKey = {
  tteokbokki:      'TTEOKBOKKI',
  kimchiFriedRice: 'KIMCHI_RICE',
  dakbokkeumtang:  'DAK_BOKKEUM',
  shabuShabu:      'SHABU',
  doenjangStew:    'DOENJANG',
  kimchiStew:      'KIMCHI_JJIGAE',
  seaweedSoup:     'MIYEOK',
  aglioOlio:       'AGLIO_OLIO',
};

// ── 토핑별 재료 추가 정보 ─────────────────────
// 각 토핑 이름 → { name, amount, unit } 형태
const toppingIngredients = {
  // 김치볶음밥
  '햄':    { name: '햄',    amount: 50,  unit: 'g' },
  '참치':  { name: '참치',  amount: 0.5, unit: '캔' },
  '소시지':{ name: '소시지',amount: 2,   unit: '개' },
  '돼지고기': { name: '돼지고기', amount: 50, unit: 'g' },
  '치즈':  { name: '슬라이스 치즈', amount: 1, unit: '장' },
  '양파':  { name: '양파',  amount: 0.25, unit: '개' },
  '당근':  { name: '당근',  amount: 0.25, unit: '개' },
  '김가루':{ name: '김가루', amount: 1,  unit: '약간' },
  // 김치찌개
  '두부':  { name: '두부',  amount: 0.25, unit: '모' },
  '차돌박이': { name: '차돌박이', amount: 50, unit: 'g' },
  '라면사리': { name: '라면사리', amount: 1, unit: '개' },
  '만두':  { name: '만두',  amount: 3,   unit: '개' },
  '떡':    { name: '떡',    amount: 50,  unit: 'g' },
  // 떡볶이
  '양배추':{ name: '양배추', amount: 50, unit: 'g' },
  '김말이':{ name: '김말이', amount: 2,  unit: '개' },
  '오뎅':  { name: '어묵',  amount: 1,   unit: '장' },
  // 닭볶음탕
  '감자':  { name: '감자',  amount: 1,   unit: '개' },
  '고구마':{ name: '고구마', amount: 1,  unit: '개' },
  '당면':  { name: '당면',  amount: 50,  unit: 'g' },
  '파':    { name: '대파',  amount: 0.5, unit: '대' },
  '무':    { name: '무',    amount: 100, unit: 'g' },
  // 된장찌개
  '호박':  { name: '애호박', amount: 0.25, unit: '개' },
  '버섯':  { name: '느타리버섯', amount: 0.5, unit: '줌' },
  '바지락':{ name: '바지락', amount: 100, unit: 'g' },
  // 미역국
  '조개':  { name: '조개',  amount: 100, unit: 'g' },
  '소고기':{ name: '소고기 국거리', amount: 50, unit: 'g' },
  '굴':    { name: '굴',    amount: 50,  unit: 'g' },
  '들깨':  { name: '들깨가루', amount: 1, unit: '큰술' },
  '옹심이':{ name: '옹심이', amount: 5,  unit: '개' },
  '황태':  { name: '황태채', amount: 20, unit: 'g' },
  '표고버섯': { name: '표고버섯', amount: 2, unit: '개' },
  // 알리오올리오
  '베이컨':{ name: '베이컨', amount: 2,  unit: '줄' },
  '새우':  { name: '새우',  amount: 5,   unit: '마리' },
  '양송이버섯': { name: '양송이버섯', amount: 3, unit: '개' },
  '바지락 (파스타)': { name: '바지락', amount: 100, unit: 'g' },
  '방울토마토': { name: '방울토마토', amount: 5, unit: '개' },
  '브로콜리': { name: '브로콜리', amount: 50, unit: 'g' },
};

// ── 맵기 레벨별 재료 변화 + 팁 ───────────────
const spicyModifiers = {
  '순한맛': {
    tip: '고추장과 고춧가루를 절반으로 줄여주세요. 매운 재료는 생략해도 돼요.',
    ingredientMod: { '고추장': -1, '고춧가루': -0.5 },
  },
  '보통맛': {
    tip: '기본 레시피 그대로 진행해주세요.',
    ingredientMod: {},
  },
  '매운맛': {
    tip: '고추장을 1큰술 더 추가하고 청양고추를 1개 넣어주세요.',
    ingredientMod: { '고추장': +1, '고춧가루': +0.5 },
    extraIngredients: [{ name: '청양고추', amount: 1, unit: '개' }],
  },
  '아주 매운맛': {
    tip: '고추장 2큰술 추가, 청양고추 2개를 넣어주세요. 매운맛 매니아에게 추천!',
    ingredientMod: { '고추장': +2, '고춧가루': +1 },
    extraIngredients: [{ name: '청양고추', amount: 2, unit: '개' }],
  },
  '안 맵게': {
    tip: '고춧가루와 청양고추를 생략해주세요.',
    ingredientMod: { '고추가루': -1, '고춧가루': -1 },
  },
  '칼칼하게': {
    tip: '청양고추 1개를 추가해주세요.',
    ingredientMod: { '고추가루': +0.5 },
    extraIngredients: [{ name: '청양고추', amount: 1, unit: '개' }],
  },
};

// ── 염도 레벨별 팁 ────────────────────────────
const saltyModifiers = {
  '싱겁게':   { tip: '간장과 소금을 평소보다 절반으로 줄여주세요.' },
  '보통':     { tip: '기본 레시피 그대로 간 맞춰주세요.' },
  '짭짤하게': { tip: '간장을 0.5큰술 더 추가하거나 소금으로 간을 더해주세요.' },
  '낮게':     { tip: '간장과 소금을 절반으로 줄여주세요.' },
  '높게':     { tip: '간장을 0.5큰술 더 추가해주세요.' },
};

// ── 계란 스타일별 팁 (김치볶음밥) ───────────
const eggStyleModifiers = {
  '없음':  { tip: '계란은 생략해주세요.' },
  '반숙':  { tip: '계란을 넣고 흰자만 익으면 바로 불을 꺼주세요. 노른자가 흐르는 반숙이 완성돼요.' },
  '완숙':  { tip: '계란을 넣고 뚜껑을 덮어 2~3분 완전히 익혀주세요.' },
};

// ── 샤브샤브 육수/소스/마무리별 팁 ──────────
const shabuModifiers = {
  brothType: {
    '맑은 육수':    { tip: '가쓰오부시 장국 60ml로 담백한 육수를 만들어주세요.' },
    '얼큰한 육수':  { tip: '장국에 고춧가루 1큰술을 추가해 얼큰하게 만들어주세요.' },
    '스키야키 육수':{ tip: '간장 2큰술, 미림 1큰술, 설탕 1큰술을 물에 섞어 달콤짭짤한 육수를 만들어주세요.' },
    '마라 육수':    { tip: '시판 마라 육수 베이스를 사용해주세요. 마트에서 쉽게 구할 수 있어요.' },
  },
  sauce: {
    '폰즈 소스':      { tip: '시판 폰즈 소스에 찍어 드세요. 상큼하고 담백해요.' },
    '스위트 칠리 소스': { tip: '시판 스위트 칠리 소스에 찍어 드세요. 달콤하고 약간 매워요.' },
    '탕콩 소스':      { tip: '땅콩버터 1큰술 + 간장 1큰술 + 참기름 0.5큰술을 섞어주세요.' },
    '참소스':         { tip: '참깨드레싱을 활용하거나 참기름 + 소금으로 만들어주세요.' },
  },
  endMeal: {
    '볶음밥': { tip: '남은 육수에 밥 1공기를 넣고 볶아주세요. 계란과 김가루를 추가하면 완벽해요!' },
    '칼국수': { tip: '남은 육수에 칼국수 면을 넣고 3~4분 끓여주세요.' },
    '죽':     { tip: '남은 육수에 밥을 넣고 약불에서 5분 끓이다가 계란을 풀어 넣으면 완성이에요.' },
  },
};

// ── 닭볶음탕 마무리 볶음밥 팁 ────────────────
const dakEndMealModifiers = {
  '없음':      { tip: '' },
  '볶음밥 추가': { tip: '닭볶음탕을 다 먹은 후 남은 양념에 밥 1공기를 넣고 볶아주세요. 고소하고 맛있어요!' },
};

// ── 미역국 국물 양별 팁 ───────────────────────
const soupAmountModifiers = {
  '자작하게': { tip: '물을 미역이 잠길 정도로만 넣어주세요. 진한 국물이 완성돼요.' },
  '보통':     { tip: '기본 레시피 그대로 물을 넣어주세요.' },
  '넉넉하게': { tip: '물을 넉넉하게 넣어주세요. 마지막에 간을 다시 한번 확인해주세요.' },
};

// ── 알리오올리오 향 재료별 팁 ────────────────
const herbModifiers = {
  '없음':     { tip: '향 재료는 생략해주세요.' },
  '파슬리':   { tip: '완성 후 파슬리를 뿌려주세요. 이탈리안 느낌이 살아나요.' },
  '대파':     { tip: '대파를 잘게 썰어 마늘과 함께 볶아주세요.' },
  '둘 다':    { tip: '대파는 볶을 때, 파슬리는 완성 후 뿌려주세요.' },
};

// ── 알리오올리오 매운 재료별 팁 ─────────────
const spicyToppingModifiers = {
  '없음':      { tip: '매운 재료는 생략해주세요.' },
  '페페론치노':{ tip: '페페론치노를 2~3개 부숴서 씨까지 함께 볶아주세요. 많이 매워요!', extraIngredients: [{ name: '페페론치노', amount: 2, unit: '개' }] },
  '고춧가루':  { tip: '고춧가루 0.5큰술을 마늘 볶을 때 함께 넣어주세요.', extraIngredients: [{ name: '고춧가루', amount: 0.5, unit: '큰술' }] },
  '둘 다':     { tip: '페페론치노와 고춧가루를 함께 넣어주세요. 매우 매울 수 있어요!', extraIngredients: [{ name: '페페론치노', amount: 2, unit: '개' }, { name: '고춧가루', amount: 0.5, unit: '큰술' }] },
};

// ── 음식별 옵션 필드 정의 ─────────────────────
const menuOptions = {
  tteokbokki: {
    label: '떡볶이',
    fields: [
      { id: 'spicyLevel', label: '맵기', type: 'select', options: ['순한맛', '보통맛', '매운맛', '아주 매운맛'] },
      { id: 'saltyLevel', label: '염도', type: 'select', options: ['싱겁게', '보통', '짭짤하게'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['햄', '양배추', '치즈', '소시지', '차돌박이', '김말이', '만두', '오뎅'] },
    ],
  },
  kimchiFriedRice: {
    label: '김치볶음밥',
    fields: [
      { id: 'spicyLevel', label: '맵기', type: 'select', options: ['순한맛', '보통맛', '매운맛'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['햄', '참치', '소시지', '돼지고기', '치즈', '양파', '당근', '김가루'] },
      { id: 'eggStyle', label: '계란', type: 'select', options: ['없음', '반숙', '완숙'] },
    ],
  },
  dakbokkeumtang: {
    label: '닭볶음탕',
    fields: [
      { id: 'spicyLevel', label: '맵기', type: 'select', options: ['순한맛', '보통맛', '매운맛'] },
      { id: 'saltyLevel', label: '염도', type: 'select', options: ['싱겁게', '보통', '짭짤하게'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['감자', '고구마', '떡', '라면사리', '당면', '파', '당근', '무'] },
      { id: 'endMeal', label: '볶음밥', type: 'select', options: ['없음', '볶음밥 추가'] },
    ],
  },
  shabuShabu: {
    label: '샤브샤브',
    fields: [
      { id: 'brothType', label: '국물', type: 'select', options: ['맑은 육수', '얼큰한 육수', '스키야키 육수', '마라 육수'] },
      { id: 'sauce', label: '소스', type: 'select', options: ['폰즈 소스', '스위트 칠리 소스', '탕콩 소스', '참소스'] },
      { id: 'endMeal', label: '마무리 식사', type: 'select', options: ['볶음밥', '칼국수', '죽'] },
    ],
  },
  doenjangStew: {
    label: '된장찌개',
    fields: [
      { id: 'spicyLevel', label: '맵기', type: 'select', options: ['안 맵게', '보통', '칼칼하게'] },
      { id: 'saltyLevel', label: '염도', type: 'select', options: ['싱겁게', '보통', '짭짤하게'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['두부', '돼지고기', '차돌박이', '양파', '호박', '감자', '버섯', '바지락'] },
    ],
  },
  kimchiStew: {
    label: '김치찌개',
    fields: [
      { id: 'spicyLevel', label: '맵기', type: 'select', options: ['순한맛', '보통맛', '매운맛'] },
      { id: 'saltyLevel', label: '염도', type: 'select', options: ['싱겁게', '보통', '짭짤하게'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['두부', '햄', '돼지고기', '차돌박이', '양파', '라면사리', '만두', '떡'] },
    ],
  },
  seaweedSoup: {
    label: '미역국',
    fields: [
      { id: 'soupAmount', label: '국물 양', type: 'select', options: ['자작하게', '보통', '넉넉하게'] },
      { id: 'saltyLevel', label: '염도', type: 'select', options: ['싱겁게', '보통', '짭짤하게'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['조개', '소고기', '굴', '들깨', '옹심이', '황태', '표고버섯', '두부'] },
    ],
  },
  aglioOlio: {
    label: '알리오올리오 파스타',
    fields: [
      { id: 'spicyTopping', label: '매운 재료', type: 'select', options: ['없음', '페페론치노', '고춧가루', '둘 다'] },
      { id: 'herb', label: '향 재료', type: 'select', options: ['없음', '파슬리', '대파', '둘 다'] },
      { id: 'saltyLevel', label: '염도', type: 'select', options: ['싱겁게', '보통', '짭짤하게'] },
      { id: 'topping', label: '토핑', type: 'multi', options: ['베이컨', '새우', '양파', '양송이버섯', '바지락', '방울토마토', '브로콜리', '치즈'] },
    ],
  },
};
