import {inputValidation as userInput} from './validation.js'
// Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиничних кораблів.
// Комп'ютер довільно розміщує ці одиничні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель.
// Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

const getGameParams = () => {
  const BATTLEFIELD_SIZE = userInput('Enter a battlefield size(5-40): ',5,40);
  const SHIPS_COUNT = userInput('Enter a count of ships(1-10): ', 1,10);
  return [BATTLEFIELD_SIZE,SHIPS_COUNT];
}
const [BATTLEFIELD, SHIPS] = getGameParams()

const getRandomNumber = (min = 0, max = BATTLEFIELD-1) => {
  return Math.floor(Math.random() * (max-min+1)+min);
}

const getArrayWithShips = (battlefieldSize, shipsCount) => {
  const BATTLEFIELD_ARRAY = new Array(battlefieldSize).fill(0);
  let shipsIndex = 0;
  while (shipsIndex < shipsCount){
    const RANDOM_INDEX = getRandomNumber()
    if (BATTLEFIELD_ARRAY[RANDOM_INDEX] === 0){
      BATTLEFIELD_ARRAY[RANDOM_INDEX] = 1;
      shipsIndex++;
    }
  }
  return BATTLEFIELD_ARRAY;
}

const getSeaBattle = (battlefieldWithShips, ships) => {
  let shipsCount = ships;
  while (shipsCount > 0){
    const USER_SHOT = userInput(`Please, enter a sector to shoot(1-${battlefieldWithShips.length}):`,1,battlefieldWithShips.length)
    if (battlefieldWithShips[USER_SHOT] === 1){
      battlefieldWithShips[USER_SHOT] = 0;
      shipsCount--
      alert(`You hit the ship. ${shipsCount} left`);
    } else alert(`You missed the ship. ${shipsCount} left`)
  }
}


const BATTLEFIELD_WITH_SHIPS = getArrayWithShips(BATTLEFIELD,SHIPS)
getSeaBattle(BATTLEFIELD_WITH_SHIPS,SHIPS)