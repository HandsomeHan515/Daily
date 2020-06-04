/**
 * 构造函数继承
 * 原理：使用 call 和 apply 更改子类函数的作用域，使 this 执行父类构造函数，子类可以继承父类共有属性
 * 优点：可解决原型链继承的缺点
 * 缺点：不可继承父类的原型链方法，构造函数不可复用
 * @Author: hanshuai 
 * @Date: 2020-06-04 10:23:36 
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-04 10:42:02
 */

function Parent (name, id) {
    this.id = id;
    this.name = name;
    this.list = ['a'];
    this.printName = function () {
        console.log(this.name);
    }
}

Parent.prototype.sayName = function () {
    console.log(this.name);
};

function Child (name, id) {
    Parent.call(this, name, id);
}

var child = new Child("han", "1");
child.printName(); // jin
// child.sayName() // Error

var a = new Child();
var b = new Child();

a.list.push('b');
console.log(b.list); // ['a']