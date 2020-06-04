/** 
 * 组合继承
 * 原理：综合使用构造函数继承和原型链继承
 * 优点：可继承父类原型上的属性，且可传参；每个新实例引入的构造函数是私有的
 * 缺点：会执行两次父类的构造函数，消耗较大内存，子类的构造函数会代替原型上的那个父类构造函数
 * @Author: hanshuai 
 * @Date: 2020-06-04 10:40:11 
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-04 10:47:33
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

Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child = new Child("jin", "1");
child.printName(); // jin
child.sayName() // jin

var a = new Child();
var b = new Child();
a.list.push('b');
console.log(b.list); // ['a']