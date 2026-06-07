const foodList = [
  "김치볶음밥",
  "김치찌개",
  "닭볶음탕",
  "된장찌개",
  "떡볶이",
  "미역국",
  "샤브샤브",
  "알리오올리오",
];

const menuKeyMap = {
  김치볶음밥: "kimchiFriedRice",
  김치찌개: "kimchiStew",
  닭볶음탕: "dakbokkeumtang",
  된장찌개: "doenjangStew",
  떡볶이: "tteokbokki",
  미역국: "seaweedSoup",
  샤브샤브: "shabuShabu",
  알리오올리오: "aglioOlio",
};

const wrongAnswerList = [
  "비빔국수",
  "국수",
  "라면",
  "부대찌개",
  "토마토 파스타",
  "감자탕",
  "갈비탕",
  "마라탕",
  "치킨마요덮밥",
  "스팸덮밥",
  "김밥",
];

const effectList = ["effect-blur", "effect-blank"];

const gameMain = document.querySelector("#game-main");
const gameEnd = document.querySelector("#game-end");
const gameGrid = document.querySelector("#guess-game .game-grid-container");
const gameSelect = document.querySelector("#guess-game .game-select");
const gameResult = {
  succ: document.querySelector(".game-result-succ"),
  menu: document.querySelector(".game-result-menu"),
};
const gameFoodImage = document.querySelector(".game-food-image");
const toRecipe = document.querySelector(".recipe-redirect-btn");

function get_random_food() {
  return foodList[Math.floor(Math.random() * foodList.length)];
}

function get_food_img_src(name) {
  return `./assets/image/game/${name}.png`;
}

function get_candidate_list() {
  return foodList.concat(wrongAnswerList);
}

function get_form_url(name) {
  const menuKey = menuKeyMap[name];

  if (!menuKey) {
    return "form.html";
  }

  const params = new URLSearchParams({
    menu: menuKey,
    source: "guess",
  });

  return `form.html?${params.toString()}`;
}

function set_game_result(is_succ, name) {
  if (!gameMain || !gameEnd) return;

  gameResult.succ.classList.remove("win", "lose");

  if (is_succ) {
    gameResult.succ.innerText = "성공!";
    gameResult.succ.classList.add("win");
  } else {
    gameResult.succ.innerText = "실패..";
    gameResult.succ.classList.add("lose");
  }

  gameResult.menu.textContent = name;
  gameEnd.classList.add("show");
}

function init_guess_game() {
  gameMain.classList.remove("hidden");
  gameEnd.classList.remove("show");

  const answer = get_random_food();
    const candiateList = get_candidate_list();

    for (let i = 0; i < candiateList.length; i++) {
      if (candiateList[i] === answer) {
        const tmp = candiateList[i];
        candiateList[i] = candiateList[0];
        candiateList[0] = tmp;
        break;
      }
    }

    for (let i = 1; i < 4; i++) {
      const random = Math.floor(Math.random() * (candiateList.length - i)) + i;
      const tmp = candiateList[random];
      candiateList[random] = candiateList[i];
      candiateList[i] = tmp;
    }

    const random = Math.floor(Math.random() * 4);
    const tmp = candiateList[random];
    candiateList[random] = candiateList[0];
    candiateList[0] = tmp;

    const opts = gameSelect.querySelectorAll("li");
    for (let i = 0; i < 4; i++) {
      opts[i].innerText = `${i + 1}. ${candiateList[i]}`;
      opts[i].addEventListener(
        "click",
        ((is_succ, menuName) => () => set_game_result(is_succ, menuName))(
          candiateList[i] === answer,
          answer,
        ),
      );
    }

    const answer_src = get_food_img_src(answer);
    if (gameFoodImage) {
      gameFoodImage.src = answer_src;
    }

    if (toRecipe) {
      toRecipe.addEventListener("click", () => {
        window.location.href = get_form_url(answer);
      });
    }

    const elements = gameGrid.querySelectorAll(".game-grid-element");
    const visibleGrid = Array.from(elements);
    const visible = Math.floor(Math.random() * 4) + 6;

    for (let i = 0; i < visible; i++) {
      const randomIndex =
        Math.floor(Math.random() * (visibleGrid.length - i)) + i;
      const swap = visibleGrid[randomIndex];
      visibleGrid[randomIndex] = visibleGrid[i];
      visibleGrid[i] = swap;
    }

    for (let i = 0; i < visible; i++) {
      visibleGrid[i].style.backgroundImage = `url(${answer_src})`;
    }

    elements.forEach((el, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const effect = effectList[Math.floor(Math.random() * effectList.length)];

      el.style.backgroundSize = "400% 300%";
      el.style.backgroundPosition = `${(col / 3) * 100}% ${(row / 2) * 100}%`;
      el.classList.add(effect);
      el.style.setProperty("--random-duration", `${Math.random() * 2 + 1}s`);
    });
}

//TODO: 
// game-nav.js에서 호출되게 하고, 이 구문 삭제
if (gameEnd) {
  gameEnd.addEventListener("click", () => {
    gameEnd.classList.remove("show");
  });

  const gameEndContent = gameEnd.querySelector(".modal-content");
  if (gameEndContent) {
    gameEndContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
}

document.addEventListener("DOMContentLoaded", init_guess_game);
