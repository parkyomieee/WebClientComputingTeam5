const fortunes = [
  "오늘은 평소와 다른 메뉴에 도전하면 행운이 따를 거예요!",
  "따뜻한 한 끼가 오늘 하루를 더 좋게 만들어 줄 거예요.",
  "친구와 함께 먹는 식사가 행복을 두 배로 만들어 줍니다.",
  "가볍게 먹어도 괜찮아요. 오늘은 속을 편하게 채워 보세요.",
  "오늘의 선택이 내일의 좋은 기운으로 이어질 거예요.",
  "천천히 음미하면 맛이 더 깊어지는 하루가 될 거예요.",
];

const menus = [
  { key: "kimchiFriedRice", name: "김치볶음밥", emoji: "🍚" },
  { key: "kimchiStew", name: "김치찌개", emoji: "🍲" },
  { key: "dakbokkeumtang", name: "닭볶음탕", emoji: "🍗" },
  { key: "doenjangStew", name: "된장찌개", emoji: "🥘" },
  { key: "tteokbokki", name: "떡볶이", emoji: "🌶️" },
  { key: "seaweedSoup", name: "미역국", emoji: "🥣" },
  { key: "shabuShabu", name: "샤브샤브", emoji: "🫕" },
  { key: "aglioOlio", name: "알리오올리오 파스타", emoji: "🍝" },
];

let selectedMenu = null;
let isDrawing = false;

const drawCookieBtn = document.getElementById("drawCookieBtn");
const heroPicture = document.getElementById("fortuneCookieHeroPicture");
const fortuneModal = document.getElementById("fortuneModal");
const fortuneModalBox = document.getElementById("fortuneModalBox");
const modalFortuneText = document.getElementById("modalFortuneText");
const modalMenuEmoji = document.getElementById("modalMenuEmoji");
const modalMenuText = document.getElementById("modalMenuText");
const recipeSelectBtn = document.getElementById("recipeSelectBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");

const SHAKE_DURATION = 550;
const SHAKE_PAUSE = 1000;

function pickRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function setModalOrigin(originEl) {
  if (!fortuneModalBox || !originEl) return;

  const rect = originEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  fortuneModalBox.style.setProperty(
    "--modal-from-x",
    `${originX - window.innerWidth / 2}px`,
  );
  fortuneModalBox.style.setProperty(
    "--modal-from-y",
    `${originY - window.innerHeight / 2}px`,
  );
}

function resetModalAnimation() {
  if (!fortuneModalBox) return;
  fortuneModalBox.classList.remove("is-emerging");
}

function shakeHeroPicture() {
  if (!heroPicture) return;

  heroPicture.classList.remove("is-shaking");
  void heroPicture.offsetWidth;
  heroPicture.classList.add("is-shaking");

  window.setTimeout(() => {
    heroPicture.classList.remove("is-shaking");
  }, SHAKE_DURATION);
}

function openFortuneModal(originEl) {
  if (
    !fortuneModal ||
    !fortuneModalBox ||
    !modalFortuneText ||
    !modalMenuEmoji ||
    !modalMenuText
  ) {
    return;
  }

  selectedMenu = pickRandomItem(menus);
  modalFortuneText.textContent = pickRandomItem(fortunes);
  modalMenuEmoji.textContent = selectedMenu.emoji;
  modalMenuText.textContent = selectedMenu.name;

  resetModalAnimation();
  setModalOrigin(originEl);
  fortuneModal.classList.add("show");

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      fortuneModalBox.classList.add("is-emerging");
    });
  });
}

function closeFortuneModal() {
  if (!fortuneModal) return;

  resetModalAnimation();
  fortuneModal.classList.remove("show");
  isDrawing = false;
}

function handleDrawCookie() {
  if (isDrawing || fortuneModal?.classList.contains("show")) return;

  isDrawing = true;

  shakeHeroPicture();

  window.setTimeout(() => {
    shakeHeroPicture();

    window.setTimeout(() => {
      openFortuneModal(heroPicture);
      isDrawing = false;
    }, SHAKE_DURATION);
  }, SHAKE_DURATION + SHAKE_PAUSE);
}

if (drawCookieBtn) {
  drawCookieBtn.addEventListener("click", handleDrawCookie);
}

if (heroPicture) {
  heroPicture.addEventListener("click", handleDrawCookie);
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeFortuneModal);
}

if (recipeSelectBtn) {
  recipeSelectBtn.addEventListener("click", () => {
    if (!selectedMenu) return;

    const params = new URLSearchParams({
      menu: selectedMenu.key,
      source: "fortune",
    });

    window.location.href = `form.html?${params.toString()}`;
  });
}

if (fortuneModal) {
  fortuneModal.addEventListener("click", closeFortuneModal);
}

if (fortuneModalBox) {
  fortuneModalBox.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeFortuneModal();
  }
});
