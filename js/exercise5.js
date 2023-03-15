import {inputValidation as userMoney} from "./validation.js";
//Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]


const PRODUCT_PRICES = [220,35,25,250,160,20,64,30,90];
const PRODUCT_TITLES = ['Cheese','juice','bread','pizza','nuggets','water','nuts','lemonade','coffee'];
const USER_MONEY = userMoney('Please, enter the amount of your money(max 10000): ', 0, 10000)

const getUserPurchasingAbility = (productPrices, productTitles, userMoney) => {
  let userPurchasingAbility = [];
  for (let productIndex = 0; productIndex < productTitles.length; productIndex++){
    if (userMoney >= productPrices[productIndex]){
      userPurchasingAbility.push(productTitles[productIndex]);
    }
  }
  return userPurchasingAbility;
}

const USER_PURCHASES_ABILITY = getUserPurchasingAbility(PRODUCT_PRICES, PRODUCT_TITLES, USER_MONEY)

const purchaseAbility = document.createElement('p');
purchaseAbility.textContent = `You can purchase: ${USER_PURCHASES_ABILITY.join(', ')}`;
document.body.appendChild(purchaseAbility);