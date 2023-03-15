//Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша та остання літери сходяться;
// •	складаються з більше ніш 5 символів;


const CAR_NUMBERS = ['BK7590BB','GFLER','AA0852ZA','CB8136AX','DGFGA','BB4177CB','2DFGX','AA1234AB','BA2588BB','FDJKV','AH4035HA','AA6126ME'];

const getNumsStartsWithA = (...carNumbers) => {
    let numbersCounter = 0;
  for (let number of carNumbers){
      if (number[0] === 'A'){
          numbersCounter++;
      }
  }
  return numbersCounter;
}

const getNumsFirstLastLettersConverge = (...carNumbers) => {
  let numbersCounter = 0;
  for (let number of carNumbers){
      if (number[0] === number.at(-1)){ //We also can use length-1 as index
          numbersCounter++;
      }
  }
  return numbersCounter;
}

const getNumsMoreThan5Char = (...carNumbers) => {
  let numbersCounter = 0;
    for (let number of carNumbers){
      if (number.length > 5){
          numbersCounter++;
      }
  }
    return numbersCounter;
}


const NUMS_START_WITH_A = getNumsStartsWithA(...CAR_NUMBERS);
const NUMS_FIRST_LAST_CONVERGE = getNumsFirstLastLettersConverge(...CAR_NUMBERS);
const NUMS_MORE_THAN_5_CHARS = getNumsMoreThan5Char(...CAR_NUMBERS)


document.write(`<p>Car numbers that starts with A letter: ${NUMS_START_WITH_A}</p><hr>
<p>Car numbers where the first and last letters converge: ${NUMS_FIRST_LAST_CONVERGE}</p><hr>
<p>Car numbers that consist of more than 5 characters: ${NUMS_MORE_THAN_5_CHARS}</p>`)