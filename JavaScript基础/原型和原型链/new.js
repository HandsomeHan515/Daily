/* new 操作符的函数实现
 * @Author: hanshuai
 * @Date: 2020-06-03 09:46:52
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-03 11:17:02
 */

/**
 * new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下操作：
 * 1. 创建一个新的简单 JavaScript 对象（即{}）；
 * 2. 链接该对象（即设置该对象的构造函数）到另一个对象；
 * 3. 将步骤 1 新创建的对象作为 this 上下文；
 * 4. 如果该函数没有返回对象，则返回 this 。
 */


function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car = new Car('Han', 'Volkswagen', '2020');
console.log(car.make);

/**
 * 当代码 new Foo(...) 执行时，会发生一下事情：
 * 1. 一个继承自 Foo.prototype 的新对象被创建；
 * 2. 使用指定的参数调用构造函数 Foo , 并将 this 绑定到新创建的对象。new Foo 等同于 new Foo() ，也就是没有指定参数列表，Foo 不带任何参数调用的情况；
 * 3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤 1 创建的对象。
 */

Car.prototype.color = 'yellow';

console.log(car.color); // yellow;

var car2 = new Car()
car2.color = 'black';
console.log(car2.color); // black
console.log(car.__proto__.color); // yellow 
console.log(car2.__proto__.color); // yellow 


function new1 (func, ...args) {
    let obj = Object.create(func.prototype);
    // let obj = {}
    // obj.__proto__ = func.prototype;
    let result = func.call(obj, ...args);
    return result instanceof Object ? result : obj;
}


var car3 = new1(Car, 'Han', 'Volkswagen', '2020');
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);

function new2 () {
    con = [].shift.call(arguments);
    // var obj = {};
    // obj.__proto__ = con.prototype;
    let obj = Object.create(con.prototype);
    let res = con.apply(obj, arguments);
    return res instanceof Object ? res : obj;
}

var car4 = new1(Car, 'Handsome', 'Volkswagen', '2022');
console.log(car4.make);
console.log(car4.model);
console.log(car4.year);