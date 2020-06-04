/**
 * 原型式继承
 * 原理：对传入其中的对象执行了一次浅复制
 * 缺点：共享引用类型
 * @Author: hanshuai 
 * @Date: 2020-06-04 10:43:00 
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-04 10:47:28
 */

function object (o) {
    function F () { }
    F.prototype = o;
    return new F();
}

var person = {
    name: 'handsome',
    friends: ['zhang', 'liu', 'sun']
}

var anotherPerson = object(person);
anotherPerson.name = 'sunshine';
console.log(anotherPerson.name);
anotherPerson.friends.push('zhao');

var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'bob';
console.log(yetAnotherPerson.name);
yetAnotherPerson.friends.push('zhu');

/** 
 * Object.create() 使用现有的对象来提供新创建的对象的__proto__。
 * ES5 中使用 Object.create() 方法规范了原型式继承，
 */

var thirdPerson = Object.create(person, {
    name: {
        value: 'jack' // person 上的属性将位于 thirdPerson 的 __proto__ 中，以这种方式指定的任何属性都会覆盖原型对象上的同名属性
    }
})

console.log(thirdPerson.name);
thirdPerson.friends.push('han');

console.log(person.name);
console.log(person.friends); // ['zhang', 'liu', 'sun', 'zhao', 'zhu', 'han']
