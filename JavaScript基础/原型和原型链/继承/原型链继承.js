/**  
 * 原型链继承
 * 原理：子类实例（child）的__proto__属性指向 Child 的原型链 prototype，而 Child.prototype 指向 Parent 类。
 * 优点：可以继承构造函数的属性，父类构造函数的属性，父类原型的属性
 * 缺点：无法向父类构造函数传参，且所有实例共享父类实例的属性，
 *      若父类共有属性为引用类型，一个子类实例更改父类构造函数共有属性时会导致继承的共有属性发生变化。
 * @Author: hanshuai 
 * @Date: 2020-06-04 10:21:37 
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-04 10:22:03
 */

function Parent (sex) {
    this.sex = sex;
    this.name = 'parent';
    this.list = ['a'];
}

Parent.prototype.sayHi = function () {
    console.log('hi');
}

function Child () { }

Child.prototype = new Parent();
var child = new Child('女');
console.log(child.name);
console.log(child.sex); // undefined
child.sayHi();

var a = new Child();
var b = new Child();

a.list.push('b');
console.log(b.list); // ['a', 'b']