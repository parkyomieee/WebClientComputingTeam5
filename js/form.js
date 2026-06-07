const form = document.querySelector("#foodForm");
const message = document.querySelector("#formMessage");
const menuChoice = document.querySelector("#menuChoice");
const fallbackFieldset = document.querySelector("#fallbackFieldset");
const customFieldset = document.querySelector("#customFieldset");
const customFields = document.querySelector("#customFields");
const selectedMenuName = document.querySelector("#selectedMenuName");
const gameSource = document.querySelector("#gameSource");
const spicyGuide = document.querySelector('.spicy-guide');

if (spicyGuide) spicyGuide.classList.remove('visible');

const menuForms = {
  tteokbokki: {
    label: "떡볶이",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛", "아주 매운맛"],
      },
      {
        id: "saltyLevel",
        label: "염도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["햄", "양배추", "치즈", "소시지", "차돌박이", "김말이", "만두", "오뎅"],
      },
    ],
  },
  kimchiFriedRice: {
    label: "김치볶음밥",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["햄", "참치", "소시지", "돼지고기", "치즈", "양파", "당근", "김가루"],
      },
      {
        id: "eggStyle",
        label: "계란",
        options: ["없음", "반숙", "완숙"],
      },
    ],
  },
  dakbokkeumtang: {
    label: "닭볶음탕",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛"],
      },
      {
        id: "saltyLevel",
        label: "염도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["감자", "고구마", "떡", "라면사리", "당면", "파", "당근", "무"],
      },
      {
        id: "endMeal",
        label: "볶음밥",
        options: ["없음", "볶음밥 추가"],
      },
    ],
  },
  shabuShabu: {
    label: "샤브샤브",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "brothType",
        label: "육수 종류",
        options: ["맑은 육수", "얼큰한 육수", "스키야키 육수", "마라 육수"],
      },
      {
        id: "sauce",
        label: "소스",
        options: ["폰즈 소스", "스위트 칠리 소스", "탕콩 소스", "참소스"],
      },
      {
        id: "endMeal",
        label: "마무리 식사",
        options: ["볶음밥", "칼국수", "죽"],
      },
    ],
  },
  doenjangStew: {
    label: "된장찌개",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["안 맵게", "보통", "칼칼하게"],
      },
      {
        id: "saltyLevel",
        label: "염도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["두부", "돼지고기", "차돌박이", "양파", "호박", "감자", "버섯", "바지락"],
      },
    ],
  },
  kimchiStew: {
    label: "김치찌개",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyLevel",
        label: "맵기 단계",
        options: ["순한맛", "보통맛", "매운맛"],
      },
      {
        id: "saltyLevel",
        label: "염도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["두부", "햄", "돼지고기", "차돌박이", "양파", "라면사리", "만두", "떡"],
      },
    ],
  },
  seaweedSoup: {
    label: "미역국",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "soupAmount",
        label: "국물 양",
        options: ["자작하게", "보통", "넉넉하게"],
      },
      {
        id: "saltyLevel",
        label: "염도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["조개", "소고기", "굴", "들깨", "옹심이", "황태", "표고버섯", "두부"],
      },
    ],
  },
  aglioOlio: {
    label: "알리오올리오 파스타",
    recipeUrl: "recipe.html",
    fields: [
      {
        id: "spicyTopping",
        label: "매운 재료",
        options: ["없음", "페페론치노", "고춧가루", "둘 다"],
      },
      {
        id: "herb",
        label: "향 재료",
        options: ["없음", "파슬리", "대파", "둘 다"],
      },
      {
        id: "saltyLevel",
        label: "염도",
        options: ["싱겁게", "보통", "짭짤하게"],
      },
      {
        id: "topping",
        label: "토핑",
        options: ["베이컨", "새우", "양파", "양송이버섯", "바지락", "방울토마토", "브로콜리", "치즈"],
      },
    ],
  },
};

const sourceLabels = {
  roulette: "룰렛 돌리기",
  tournament: "토너먼트",
  fortune: "포춘쿠키",
  guess: "음식 맞추기",
  recommend: "메뉴 추천",
};

if (!form) {
  // form.html 이 아닌 페이지에서는 실행하지 않음
} else {
  const params = new URLSearchParams(window.location.search);
  const initialMenu = params.get("menu");
  const source = params.get("source");

  function renderCustomFields(menuKey) {
    const menu = menuForms[menuKey];

    if (!menu) {
      selectedMenuName.textContent = "메뉴를 선택해주세요";
      customFields.innerHTML = "";
      customFieldset.hidden = true;
      return;
    }

    selectedMenuName.textContent = menu.label;
    customFieldset.hidden = false;
    customFields.innerHTML = menu.fields
      .map((field) => {
        const options = field.options
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("");

        return `
      <label for="${field.id}">${field.label}</label>
      <select id="${field.id}" name="${field.id}" required>
        <option value="">선택하세요</option>
        ${options}
      </select>
    `;
      })
      .join("");

    if (spicyGuide) {
      spicyGuide.classList.remove('visible');
      const spicyFieldDef = menu.fields.find((f) => f.id === 'spicyLevel');
      if (spicyFieldDef) {
        const spicySelect = document.getElementById('spicyLevel');
        if (spicySelect && !spicySelect.dataset.guideAttached) {
          const showGuide = () => spicyGuide.classList.add('visible');
          const hideGuide = () => spicyGuide.classList.remove('visible');
          spicySelect.addEventListener('focus', showGuide);
          spicySelect.addEventListener('click', showGuide);
          spicySelect.addEventListener('blur', () => setTimeout(hideGuide, 140));
          spicySelect.dataset.guideAttached = 'true';
        }
      }
    }
  }

  function getSelectedOptions(menuKey) {
    const menu = menuForms[menuKey];
    const data = new FormData(form);

    return menu.fields.map((field) => ({
      id: field.id,
      label: field.label,
      value: data.get(field.id),
    }));
  }

  function validate(menuKey) {
    if (!menuForms[menuKey]) {
      return "추천받은 메뉴를 선택해주세요.";
    }

    const hasEmptyOption = getSelectedOptions(menuKey).some(
      (option) => !option.value,
    );

    if (hasEmptyOption) {
      return "메뉴별 세부 선택을 모두 입력해주세요.";
    }

    return "";
  }

  function goToRecipe(menuKey) {
    const menu = menuForms[menuKey];
    const foodKey = menuKeyToFoodKey[menuKey];
    const recipeParams = new URLSearchParams();

    if (foodKey) {
      recipeParams.set("food", foodKey);
    }

    recipeParams.set("menu", menuKey);

    if (source) {
      recipeParams.set("source", source);
    }

    getSelectedOptions(menuKey).forEach((option) => {
      recipeParams.set(option.id, option.value);
    });

    window.location.href = `${menu.recipeUrl}?${recipeParams.toString()}`;
  }

  if (sourceLabels[source]) {
    gameSource.textContent = `${sourceLabels[source]}에서 추천됨`;
  }

  if (menuForms[initialMenu]) {
    menuChoice.value = initialMenu;
    fallbackFieldset.hidden = true;
  }

  renderCustomFields(menuChoice.value);

  menuChoice.addEventListener("change", (event) => {
    message.textContent = "";
    renderCustomFields(event.target.value);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedMenu = menuChoice.value;
    const error = validate(selectedMenu);

    if (error) {
      message.textContent = error;
      return;
    }

    message.textContent = "";
    goToRecipe(selectedMenu);
  });
}
