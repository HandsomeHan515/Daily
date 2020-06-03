// Person 构造函数
function Person (name) {
    this.name = name;
}

// 实例
var person = new Person('han')

// Person.prototype  为原型对象，原型对象的 constructor 属性就是构造函数

// person.__proto__ 为 Person 的原型对象