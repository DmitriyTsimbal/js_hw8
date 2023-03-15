import {inputValidation as userInput} from "./validation.js";
//Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500).
// Надаючи користувачу можливість вибирати номери елементів (поки він не відмовиться). Знаходити сумарний виграш.


const getPrizesCount = () => {
    const MIN = 10;
    const MAX = 200;
    return Math.floor(Math.random() * (MAX-MIN+1)+MIN);
}

const getPrizesArray = (prizesCount) => {
    const MAX_PRIZE = 500;
    const MAX_LOOSE = -500;
    const PRIZES = [];
    for (let prizeIndex = 0; prizeIndex < prizesCount; prizeIndex++) {
        PRIZES.push(Math.floor(Math.random() * (MAX_PRIZE-MAX_LOOSE+1)+MAX_LOOSE));
    }
    return PRIZES;
}

const getUserPrizes = (prizesArray) => {
    let userChoice;
    let prizesSum = 0;
    do {
        if (userChoice) {
            prizesSum += prizesArray[userChoice-1]
            alert(`Your prize is ${prizesArray[userChoice-1]}`)
        }
        userChoice = userInput(`Enter a prize index(1-${ PRIZES.length}): `, 1, PRIZES.length)
        if (userChoice === null) userChoice = false;
    } while (userChoice !== false)
    return prizesSum;
}

const PRIZES_COUNT = getPrizesCount();
const PRIZES = getPrizesArray(PRIZES_COUNT);
const USER_PRIZES_SUM = getUserPrizes(PRIZES);
const userSumSection = document.createElement('p');
userSumSection.textContent = `Result of your game is: ${USER_PRIZES_SUM}`
document.body.appendChild(userSumSection);
