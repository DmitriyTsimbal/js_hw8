import {inputValidation as userPayment} from "./validation.js";
//Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за II квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

const getPaymentsPerYear = () => {
    let paymentsList = [];
    for (let paymentNumber = 0; paymentNumber < 12; paymentNumber++){
        const PAYMENT = userPayment(`Enter a payment per ${paymentNumber+1} month: `, 0, 5000000);
        paymentsList.push(PAYMENT);
    }
    return paymentsList;
}

const PAYMENTS_PER_YEAR = getPaymentsPerYear();

const getPaymentsSum = (paymentsList, startPeriod = 0, endPeriod = 11, stepPeriod = 1) => {
  let paymentSumResult = 0;
    for (let paymentIndex = startPeriod; startPeriod <= endPeriod; startPeriod += stepPeriod){
        paymentSumResult+=paymentsList[paymentIndex]
  }
    return paymentSumResult;
}

const SUM_PER_YEAR = getPaymentsSum(PAYMENTS_PER_YEAR);
const SUM_PER_FIRST_HALF_OF_YEAR = getPaymentsSum(PAYMENTS_PER_YEAR,0,5);
const SUM_PER_SECOND_HALF_OF_YEAR = getPaymentsSum(PAYMENTS_PER_YEAR,6);
const SUM_PER_SUMMER = getPaymentsSum(PAYMENTS_PER_YEAR,7,9);
const SUM_PER_SECOND_QUARTER = getPaymentsSum(PAYMENTS_PER_YEAR, 3,5);
const SUM_PER_EVEN_MONTHS = getPaymentsSum(PAYMENTS_PER_YEAR,0,11,2);
const SUM_PER_FIRST_SEASON_MONTH = getPaymentsSum(PAYMENTS_PER_YEAR, 2,11,3);

const paymentsSumSection = document.createElement('p');
paymentsSumSection.textContent = `Payments sum per year: ${SUM_PER_YEAR}; Payments sum per first half of year: ${SUM_PER_FIRST_HALF_OF_YEAR};
 Payments sum per second half of year:${SUM_PER_SECOND_HALF_OF_YEAR}; Payments sum per summer: ${SUM_PER_SUMMER}; Payments sum per second quarter: ${SUM_PER_SECOND_QUARTER};
  Payments sum per even months: ${SUM_PER_EVEN_MONTHS}; Payments sum per first season month: ${SUM_PER_FIRST_SEASON_MONTH}`;
document.body.appendChild(paymentsSumSection)