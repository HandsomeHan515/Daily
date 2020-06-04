/**
 * 寄生组合式继承
 * 原理：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
 * 优点：只调用了一次父类构造函数，原型链还能保持不变， 能够正常使用 instanceof 和 isPrototypeOf()
 * @Author: hanshuai
 * @Date: 2020-06-04 10:53:34
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-04 11:11:47
 */

function object (o) {
    function F () { }
    F.prototype = o;
    return new F();
}

function inheritPrototype (subType, superType) {
    var prototype = object(superType.prototype); // 创建对象
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function superType (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'yellow'];
}

superType.prototype.sayName = function () {
    console.log(this.name);
}

function subType (name, age) {
    superType.call(this, name)
    this.age = age;
}

inheritPrototype(subType, superType);

subType.prototype.sayAge = function () {
    console.log(this.age);
}

var a = new subType('han', 24);
console.log(a.name, a.age); // han 24
a.sayAge(); // 24
a.sayName(); // han

var b = new superType('handsome');
console.log(b.name, b.age); // handsome undefined
b.sayName(); // handsome
// b.sayAge(); // Error