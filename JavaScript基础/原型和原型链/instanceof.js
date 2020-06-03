/* instanceof操作符的函数实现
 * @Author: hanshuai
 * @Date: 2020-06-03 13:51:36
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-03 15:17:23
 */

/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 */

function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car = new Car('Han', 'Volkswagen', '2020');
console.log(car instanceof Car);
console.log(car instanceof Object);

console.log(car.__proto__);
console.log(car.__proto__.__proto__);
console.log(car.__proto__.__proto__.__proto__);
console.log(car.__proto__.__proto__ === Object.prototype); // ture

function instanceOf (L, R) {
    if (L === null) return false
    var O = R.prototype;
    // L = L.__proto__;
    L = Object.getPrototypeOf(L);
    while (true) {
        if (L === null) return false;
        if (O === L) return true;
        // L = L.__proto__;
        L = Object.getPrototypeOf(L);
    }
}

console.log(instanceOf(car, Car));
console.log(instanceOf(car, Object));

console.log(instanceOf(String, String)); // false
console.log(instanceOf(Number, Number)); // false
console.log('Object Object', instanceOf(Object, Object)); // true

function Foo () { }
console.log(instanceOf(Foo, Foo)); // false

console.log(null instanceof Object); // false
console.log(instanceOf(null, Object)); // false