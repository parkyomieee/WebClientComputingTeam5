// 파일
const mockData = [
    { id: 1, name: "김치볶음밥", image: "" },
    { id: 2, name: "닭볶음탕", image: "" },
    { id: 3, name: "샤브샤브", image: "" },
    { id: 4, name: "된장찌개", image: "" },
    { id: 5, name: "김치찌개", image: "" },
    { id: 6, name: "떡볶이", image: "" },
    { id: 7, name: "미역국", image: "" },
    { id: 8, name: "알리오올리오 파스타", image: "" }
];

// 2. 토너먼트 상태 관리 변수
let totalRound = 8;        // 몇강인지
let currentRoundFoods = []; // 현재 라운드에 남아있는 음식들
let nextRoundFoods = [];    // 다음 라운드로 진출하는 음식
let matchIndex = 0;         // 현재 몇 번째 대결인지 (0부터 시작)

// 3. HTML DOM 요소
const titleEl = document.getElementById("tournament-title");
const roundInfoEl = document.getElementById("round-info");
const leftCard = document.getElementById("left-card");
const rightCard = document.getElementById("right-card");
const leftName = document.getElementById("left-name");
const rightName = document.getElementById("right-name");

const modal = document.getElementById("winner-modal");
const winnerName = document.getElementById("winner-name");
const shortcutLink = document.getElementById("shortcut-link"); // 바로가기 버튼

// 4. 게임 시작 
function initGame() {
    currentRoundFoods = mockData
        .slice(0, totalRound)
        .sort(() => Math.random() - 0.5); 
    
    matchIndex = 0;
    nextRoundFoods = [];
    
    showMatch();
}

// 5. 현재 대결 화면에 표시
function showMatch() {
    // 타이틀 업데이트 
    if (totalRound === 2) {
        titleEl.textContent = "결승전";
        roundInfoEl.textContent = "1/1";
    } else {
        titleEl.textContent = `${totalRound}강`;
        roundInfoEl.textContent = `${matchIndex + 1} / ${totalRound / 2}`;
    }

    // 현재 대결할 두 음식 
    const food1 = currentRoundFoods[matchIndex * 2];
    const food2 = currentRoundFoods[matchIndex * 2 + 1];

    // 화면 텍스트 바꾸기
    leftName.textContent = food1.name;
    rightName.textContent = food2.name;

    // [ 이미지 ] 
}

// 6. 카드 클릭 
function selectFood(selectedIndex) {
    
    const food1 = currentRoundFoods[matchIndex * 2];
    const food2 = currentRoundFoods[matchIndex * 2 + 1];
    
    if (selectedIndex === 0) {
        nextRoundFoods.push(food1);
    } else {
        nextRoundFoods.push(food2);
    }

    matchIndex++; // 다음 매치로

    // 현재 라운드의 모든 대결이 끝났는지 확인
    if (matchIndex < totalRound / 2) {
        showMatch();
    } else {
        // 다음 라운드로 진행하거나 결승이 끝난 경우
        if (nextRoundFoods.length === 1) {
            showWinner(nextRoundFoods[0]);
        } else { //다음 라운드
            currentRoundFoods = nextRoundFoods;
            nextRoundFoods = [];
            totalRound = totalRound / 2;
            matchIndex = 0;
            showMatch();
        }
    }
}

// 7. 우승자 결과 창
function showWinner(winner) {
    winnerName.textContent = winner.name;
    
    // [레시피 주소]]
    shortcutLink.href = "#"; // 주소

    // 모달 활성화
    modal.classList.add("active");
}

// 8. 왼쪽 클릭 / 오른쪽 클릭
leftCard.addEventListener("click", () => selectFood(0));
rightCard.addEventListener("click", () => selectFood(1));

// 최초 게임 실행 (기본 8강 스타트)
initGame();