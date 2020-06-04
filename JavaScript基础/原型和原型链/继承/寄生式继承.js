/**
 * 寄生式继承
 * 原理：二次封装原型式继承
 * 优点：可添加新的属性和方法
 * 缺点：不能做到函数复用而降低效率
 * @Author: hanshuai
 * @Date: 2020-06-04 10:46:22
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-04 10:52:42
 */

function object (o) {
    function F () { }
    F.prototype = o;
    return new F();
}

function createAnother (original) {
    var clone = object(original);
    clone.sayHi = function () {
        console.log('hi');
    }
    return clone;
}

var person = {
    name: 'handsome',
    friends: ['zhang', 'liu', 'sun']
}

var anotherPerson = createAnother(person);
anotherPerson.name = 'sunshine';
console.log(anotherPerson.name); // sunshine
anotherPerson.friends.push('zhao');
anotherPerson.sayHi(); // hi

console.log(person.name); // handsome
console.log(person.friends); // [ 'zhang', 'liu', 'sun', 'zhao', 'zhu' ]