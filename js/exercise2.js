//Дано масив імен учнів. З'ясувати скільки разів зустрічається ім’я «Іван».

const NAMES_ARRAY = ['Ivan', 'Oleg', 'Olya', 'Ivan', 'Nadya', 'Tom', 'Ivan', 'Tom', 'Ivan', 'Olya'];
const getIvanNameCounter = (...usersNames) => {
    let ivanNameCounter = 0;
for (let user of usersNames){
    if (user === 'Ivan'){
        ivanNameCounter++;
    }
}
return ivanNameCounter;
}


const GET_IVAN_NAME_COUNTS = getIvanNameCounter(...NAMES_ARRAY);

document.write(`Among all the students, Ivan occurs ${GET_IVAN_NAME_COUNTS} times`)