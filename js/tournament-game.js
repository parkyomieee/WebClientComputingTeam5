const tournamentFoods = [
  { name: "김치볶음밥", key: "kimchiFriedRice" },
  { name: "김치찌개", key: "kimchiStew" },
  { name: "닭볶음탕", key: "dakbokkeumtang" },
  { name: "된장찌개", key: "doenjangStew" },
  { name: "떡볶이", key: "tteokbokki" },
  { name: "미역국", key: "seaweedSoup" },
  { name: "샤브샤브", key: "shabuShabu" },
  { name: "알리오올리오", key: "aglioOlio" },
];

const leftCard = document.getElementById("left-card");
const rightCard = document.getElementById("right-card");
const leftImg = document.getElementById("left-img");
const rightImg = document.getElementById("right-img");
const leftName = document.getElementById("left-name");
const rightName = document.getElementById("right-name");
const roundInfo = document.getElementById("round-info");
const winnerModal = document.getElementById("winner-modal");
const winnerImg = document.getElementById("winner-img");
const winnerName = document.getElementById("winner-name");
const shortcutLink = document.getElementById("shortcut-link");

//
const gameHeader = document.getElementById("tournament-title");

let currentRound = [];
let nextRound = [];
let matchIndex = 0;
let totalMatches = 0;

function shuffle(list) {
  const copied = [...list];

  for (let i = copied.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[randomIndex]] = [copied[randomIndex], copied[i]];
  }

  return copied;
}

function getFoodImage(name) {
  return `./assets/image/game/${name}.png`;
}

function setFoodCard(imgEl, nameEl, food) {
  imgEl.style.backgroundImage = `url(${getFoodImage(food.name)})`;
  nameEl.textContent = food.name;
}

// 8강, 4
function getRoundName(count) {
  if (count === 2) return "결승전";
  return `${count}강`;
}

function updateRoundInfo() {
  roundInfo.textContent = `${matchIndex + 1}/${totalMatches}`;
}

function showCurrentMatch() {
  const leftFood = currentRound[matchIndex * 2];
  const rightFood = currentRound[matchIndex * 2 + 1];

  setFoodCard(leftImg, leftName, leftFood);
  setFoodCard(rightImg, rightName, rightFood);
  updateRoundInfo();
}

function openWinnerModal(food) {
  setFoodCard(winnerImg, winnerName, food);
  shortcutLink.href = `form.html?menu=${food.key}&source=tournament`;
  winnerModal.classList.add("show");
}

function startRound(foods) {
  currentRound = foods;
  nextRound = [];
  matchIndex = 0;
  totalMatches = currentRound.length / 2;
  showCurrentMatch();
}

function pickWinner(side) {
  const winner = side === "left"
    ? currentRound[matchIndex * 2]
    : currentRound[matchIndex * 2 + 1];

  nextRound.push(winner);
  matchIndex += 1;

  if (matchIndex < totalMatches) {
    showCurrentMatch();
    return;
  }

  if (nextRound.length === 1) {
    openWinnerModal(nextRound[0]);
    return;
  }

  startRound(nextRound);
}

//  초기화  (새로고침,헤더 클릭 시)
function initTournament() {
  if (!leftCard || !rightCard) return;
  if (winnerModal) winnerModal.classList.remove("show"); // 모달 닫기
  startRound(shuffle(tournamentFoods));
}

if (leftCard) {
  leftCard.addEventListener("click", () => pickWinner("left"));
}

if (rightCard) {
  rightCard.addEventListener("click", () => pickWinner("right"));
}

// 
if (winnerModal) {
  winnerModal.addEventListener("click", (event) => {
    if (event.target === winnerModal) {
      winnerModal.classList.remove("show");
    }
  });
  
  const modalContent = winnerModal.querySelector(".modal-content");
  if (modalContent) {
    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
}

initTournament();
