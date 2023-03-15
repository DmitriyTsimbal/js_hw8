//Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною.;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

const NUMBER_OF_VISITORS = [16,7,23,45,89,28,7];

const getDayNumIfVisitorsLess20 = (...visitorsNumber) => {
    let visitorsLessThan20 = [];
  for (let arrIndex = 0; arrIndex < visitorsNumber.length; arrIndex++){
       if (visitorsNumber[arrIndex] < 20) visitorsLessThan20.push(arrIndex+1);
  }
  return visitorsLessThan20;
}

const getDayNumWithMinVisitors = (...visitorsNumber) => {
    let minValue = Infinity;
    let visitorsMinCount = [];
    for (let visitor of visitorsNumber){
        if (visitor <= minValue){
            minValue = visitor;
        }
    }
    for (let arrIndex = 0; arrIndex < visitorsNumber.length; arrIndex++){
        if (visitorsNumber[arrIndex] === minValue){
            visitorsMinCount.push(arrIndex+1);
        }
    }
    return visitorsMinCount;
}


const getDayNumWithMaxVisitors = (...visitorsNumber) => {
    let maxValue = -Infinity;
    let visitorsMaxCount = [];
    for (let visitor of visitorsNumber){
        if (visitor >= maxValue){
            maxValue = visitor;
        }
    }
    for (let arrIndex = 0; arrIndex < visitorsNumber.length; arrIndex++){
        if (visitorsNumber[arrIndex] === maxValue){
            visitorsMaxCount.push(arrIndex+1);
        }
    }
    return visitorsMaxCount;
}

const getVisitorsCount = (...visitorsNumber) => {
  let weekdayVisitorsCount = 0;
  let weekendsVisitorsCount = 0;
  for (let arrIndex = 0; arrIndex < visitorsNumber.length; arrIndex++){
      (arrIndex < 5) ? weekdayVisitorsCount += visitorsNumber[arrIndex]: weekendsVisitorsCount += visitorsNumber[arrIndex];
  }
  return [weekdayVisitorsCount, weekendsVisitorsCount];
}

const VISITORS_LESS_THAN_20 = getDayNumIfVisitorsLess20(...NUMBER_OF_VISITORS);
const MIN_NUMBER_VISITORS = getDayNumWithMinVisitors(...NUMBER_OF_VISITORS);
const MAX_NUMBER_VISITORS = getDayNumWithMaxVisitors(...NUMBER_OF_VISITORS);

const VISITORS_COUNT = getVisitorsCount(...NUMBER_OF_VISITORS);
const WEEKDAY_VISITORS_COUNT = VISITORS_COUNT[0];
const WEEKENDS_VISITORS_COUNT = VISITORS_COUNT[1];

document.write(`<table>
    <tr><th>Numbers of days during which the number of visitors was less than 20</th><td>${VISITORS_LESS_THAN_20}</td></tr>
    <tr><th>Numbers of days when the number of visitors was minimal</th><td>${MIN_NUMBER_VISITORS}</td></tr>
    <tr><th>Numbers of days when the number of visitors was maximum</th><td>${MAX_NUMBER_VISITORS}</td></tr>
    <tr><th>Total number of customers on weekdays</th><td>${WEEKDAY_VISITORS_COUNT}</td></tr>
    <tr><th>Total number of customers on weekends</th><td>${WEEKENDS_VISITORS_COUNT}</td></tr>
</table>`)
