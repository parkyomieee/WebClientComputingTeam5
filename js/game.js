
const foodList = [
    '김치볶음밥',
    '김치찌개',
    '닭볶음탕',
    '된장찌개',
    '떡볶이',
    '미역국',
    '샤브샤브',
    '알리오올리오',
]

const wrongAnswerList = [
    '비빔국수',
    '국수',
    '라면',
    '부대찌개',
    '토마토 파스타',
    '감자탕',
    '갈비탕',
    '마라탕',
    '치킨마요덮밥',
    '스팸덮밥',
    '김밥'
]

const effectList = [
    'effect-blur',
    'effect-blank'
]

const gameMain = document.querySelector("#game-main");
const gameEnd = document.querySelector("#game-end"); 

const gameGrid = document.querySelector(".game-grid-container");
const gameSelect = document.querySelector(".game-select");

const gameResult = { 
    succ: document.querySelector(".game-result-succ"),
    menu: document.querySelector(".game-result-menu")
};
const gameFoodImage = document.querySelector(".game-food-image");
const toRecipe = document.querySelector(".recipe-redirect-btn");

// TODO
// 데이터 구조 확정시 아래 함수 변경
function get_random_food() 
{
    return foodList[Math.floor(Math.random() * foodList.length)];
}

function get_food_img_src(name) {
    return `./assets/image/game/${name}.png`;
}

function get_candidate_list() {
    return foodList.concat(wrongAnswerList);
}

// TODO
// 후에 연결시 수정
function get_recipe_url(name) {
    return "game.html";
}

function set_game_result(is_succ, name) 
{
    if (is_succ) {
        gameResult.succ.innerText = "성공!";
        gameResult.succ.classList.add("win");
    }
    else {
        gameResult.succ.innerText = "실패..";
        gameResult.succ.classList.add("lose");
    }
    gameResult.menu.innerHTML = name;
    gameMain.classList.add("hidden");
    gameEnd.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    let answer = get_random_food();

    let candiateList = get_candidate_list();

    // Shuffle
    for (let i = 0; i < candiateList.length; i++) {
        if (candiateList[i] === answer) {
            let tmp = candiateList[i];
            candiateList[i] = candiateList[0];
            candiateList[0] = tmp; 
            break;
        }
    }

    for (let i = 1; i < 4; i++) {
        let random = Math.floor(Math.random() * (candiateList.length - i)) + i;
        let tmp = candiateList[random];
        candiateList[random] = candiateList[i];
        candiateList[i] = tmp; 
    }

    let random = Math.floor(Math.random() * 4);
    let tmp = candiateList[random];
    candiateList[random] = candiateList[0];
    candiateList[0] = tmp;

    // DOM update
    const opts = gameSelect.querySelectorAll("li");
    for (let i = 0; i < 4; i++) {
        opts[i].innerText = `${i + 1}. ${candiateList[i]}`;
        opts[i].addEventListener("click", ((is_succ, answer) => () => set_game_result(is_succ, answer))(candiateList[i] === answer, answer));
    }

    // Game Grid Setup
    let answer_src = get_food_img_src(answer);
    gameFoodImage.src = answer_src;
    toRecipe.addEventListener("click", () => {
        window.location.href = get_recipe_url(answer);
    });
    
    const elements = gameGrid.querySelectorAll(".game-grid-element");

    const visibleGrid = Array.from(elements);
    const visible = Math.floor(Math.random() * 4) + 6;
    for (let i = 0; i < visible; i++) {
        let random = Math.floor(Math.random() * (visibleGrid.length - i)) + i;
        let tmp = visibleGrid[random];
        visibleGrid[random] = visibleGrid[i];
        visibleGrid[i] = tmp;
    }
    for (let i = 0; i < visible; i++) {
        visibleGrid[i].style.backgroundImage = `url(${answer_src})`;
    }

    elements.forEach((el, i) => {
        const col = i % 4;   // 0~3
        const row = Math.floor(i / 4);  // 0~2
        const effect = effectList[Math.floor(Math.random() * effectList.length)];

        el.style.backgroundSize = `400% 300%`;          // 4열 3행
        el.style.backgroundPosition = `${col / 3 * 100}% ${row / 2 * 100}%`;
        el.classList.add(effect);
        el.style.setProperty('--random-duration', `${Math.random() * 2  + 1}s`);
    });
});