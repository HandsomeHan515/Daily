/* map */
const carsWithPrice = [
    { brand: "Porsche", price: 100000 },
    { brand: "Audi", price: 80000 },
];

const carsWithPriceAndTax = carsWithPrice.map((carObject) => ({
    // Return the original car object
    ...carObject,
    // but also add a new value containing the price with tax
    priceWithTax: carObject.price * 1.2,
}));

console.log(carsWithPriceAndTax);

console.log(carsWithPrice);

/* filter */

/* reduce */

const number = [1, 2, 3, 4, 5]
const total = number.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(total);

/* forEach */

/* find */
/* find 将仅返回与您提供的条件匹配的第一个元素 */

const expensiveCar = carsWithPrice.find(car => car.price >= 40000);

console.log(expensiveCar); // { brand: 'Porsche', price: 100000 }

/* every */
/* 数组中的所有元素都通过条件 */
const cars = [
    { brand: "Porsche", price: 100000, builtIn: 2018 },
    { brand: "Audi", price: 80000, builtIn: 2019 },
    { brand: "Toyota", price: 30000, builtIn: 2014 },
];
const carsYoungerThanFiveYears = cars.every(car => car.builtIn >= 2016);
console.log(carsYoungerThanFiveYears);

/* some */
/* 只要有其中一个元素满足条件 */
const carsYoungerThanFiveYear = cars.some(car => car.builtIn >= 2016);
console.log(carsYoungerThanFiveYear);

var arr = [1, 2, 3, 4]
console.log(arr.length & 1);
