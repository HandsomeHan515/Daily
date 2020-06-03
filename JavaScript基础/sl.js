// // // // // // let slList = [{
// // // // // //     code: 'space', // 清单明细时，sl为空，因select不能填空字符串使用space标识，上传数据时再将sl置空
// // // // // //     name: '--'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.17',
// // // // // //     name: '17%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.16',
// // // // // //     name: '16%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.13',
// // // // // //     name: '13%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.11',
// // // // // //     name: '11%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.1',
// // // // // //     name: '10%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.09',
// // // // // //     name: '9%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.06',
// // // // // //     name: '6%'
// // // // // // },
// // // // // // // 含税税率和不含税税率都是 5%，为了区分将含税税率 缩小10倍，数据上传时再乘 10
// // // // // // {
// // // // // //     code: '0.005',
// // // // // //     name: '5%(含税)'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.05',
// // // // // //     name: '5%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.04',
// // // // // //     name: '4%'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.03',
// // // // // //     name: '3%'
// // // // // // },

// // // // // // {
// // // // // //     code: '0.015',
// // // // // //     name: '1.5%(减按)'
// // // // // // },
// // // // // // {
// // // // // //     code: '0.01',
// // // // // //     name: '1%'
// // // // // // },
// // // // // // ]

// // // // // // slList.splice(8, 1)
// // // // // // slList.splice(11, 1)
// // // // // // console.log(slList)

// // // // // // function Person () {
// // // // // //     console.log('this', this) //是构造函数调用，指向实例化的对象personOne
// // // // // // }
// // // // // // var personOne = new Person();

// // // // // // function foo () {
// // // // // //     console.log(this);
// // // // // // }

// // // // // // foo.apply('我是apply改变的this值');//我是apply改变的this值
// // // // // // foo.call('我是call改变的this值');//我是call改变的this值

// // // // // // call 和 apply 的用法

// // // // // // var foo = {
// // // // // //     name: '张三',
// // // // // //     logName: function () {
// // // // // //         console.log(this.name)
// // // // // //     }
// // // // // // }

// // // // // // var bar = {
// // // // // //     name: '李四'
// // // // // // }

// // // // // // foo.logName.call(bar)

// // // // // // // 两个函数实现继承

// // // // // // function Animal (name) {
// // // // // //     this.name = name;
// // // // // //     this.showName = function () {
// // // // // //         console.log(this.name);
// // // // // //     }
// // // // // // }

// // // // // // function Cat (name) {
// // // // // //     Animal.call(this, name)
// // // // // // }

// // // // // // var cat = new Cat('Black Cat');
// // // // // // cat.showName();

// // // // // // var a = {
// // // // // //     a: 1,
// // // // // //     b: '2',
// // // // // //     c: true,
// // // // // //     d: null,
// // // // // //     e: undefined,
// // // // // //     f: function () { console.log(123) },
// // // // // //     g: [1, 2, 3]
// // // // // // }

// // // // // // var b = JSON.parse(JSON.stringify(a)) // 过滤 undefined / 函数
// // // // // // console.log(b);

// // // // // // // 为类数组（arguments/nodeList）添加数组方法 pop/ push

// // // // // // (function () {
// // // // // //     Array.prototype.push.call(arguments, '王五');
// // // // // //     console.log(arguments)
// // // // // // })('张三', '李四');

// // // // // // // 合并数组
// // // // // // let arr1 = [1, 2, 3];
// // // // // // let arr2 = [4, 5, 6];

// // // // // // Array.prototype.push.apply(arr1, arr2)

// // // // // // console.log('arr1 arr2', arr1, arr2)

// // // // // // // 求数组最大值

// // // // // // var max = Math.max.apply(null, arr2);
// // // // // // console.log('max', max)

// // // // // // // 判断字符类型

// // // // // // let type = Object.prototype.toString.call('123')
// // // // // // console.log('type', type)

// // // // // // Call 的原生实现

// // // // // Function.prototype.myCall = function (context, ...params) {
// // // // //     if (typeof context === 'object' || typeof context === 'function') {
// // // // //         context = context || window;
// // // // //     } else {
// // // // //         context = Object.create(null);
// // // // //     }

// // // // //     context.fn = this;

// // // // //     console.log('this', context)
// // // // //     const res = context.fn(...params);
// // // // //     delete context.fn;
// // // // //     return res;
// // // // // }

// // // // // let person = {
// // // // //     name: 'Han'
// // // // // }

// // // // // function say (age, sex) {
// // // // //     console.log(this.name, age, sex)
// // // // // }

// // // // // say.myCall(person, 26, '男');

// // // // // // Apply 的原生实现
// // // // // Function.prototype.myApply = function (context, params) {
// // // // //     if (typeof context === 'object' || typeof context === 'function') {
// // // // //         context = context || window
// // // // //     } else {
// // // // //         context = Object.create(null)
// // // // //     }

// // // // //     context.fn = this;
// // // // //     const res = context.fn(...params);
// // // // //     delete context.fn;
// // // // //     return res;
// // // // // }

// // // // // say.myApply(person, [26, '男']);

// // // // // // Bind 的原生实现
// // // // // Function.prototype.myBind = function (context, ...innerArgs) {
// // // // //     var me = this;
// // // // //     return function (...finnalArgs) {
// // // // //         return me.call(context, ...innerArgs, ...finnalArgs)
// // // // //     }
// // // // // }

// // // // // // 防抖 debounce

// // // // // function debounce (fn, wait) {
// // // // //     let timer = null;
// // // // //     return function () {
// // // // //         let context = this;
// // // // //         let args = arguments;
// // // // //         if (timer) clearTimeout(timer) //如果多次触发将上次记录延迟清除掉
// // // // //         timer = setTimeout(function () {
// // // // //             fn.apply(context, args);
// // // // //             timer = null;
// // // // //         }, wait || 1000);
// // // // //     };
// // // // // }


// // // // // function debounce (fn, wait, immediate) {
// // // // //     var timer = null;
// // // // //     return function () {
// // // // //         if (timer) clearTimeout(timer)
// // // // //         var context = this;
// // // // //         var args = arguments;
// // // // //         if (immediate) {
// // // // //             if (!timer) {
// // // // //                 fn.apply(context, args);
// // // // //             }

// // // // //             timer = setTimeout(function () {
// // // // //                 timer = null;
// // // // //             }, wait || 1000);
// // // // //         } else {
// // // // //             timer = setTimeout(function () {
// // // // //                 fn.apply(context, args);
// // // // //                 timer = null;
// // // // //             }, wait || 1000);
// // // // //         }
// // // // //     }
// // // // // }

// // // // // // 节流 throttle

// // // // // function throtte (fn, wait) {
// // // // //     let timer = null
// // // // //     return function () {
// // // // //         var context = this;
// // // // //         var args = arguments;
// // // // //         if (!timer) {
// // // // //             timer = setTimeout(function () {
// // // // //                 fn.apply(context, args)
// // // // //             }, wait || 1000);
// // // // //         }
// // // // //     }
// // // // // }

// // // // // function Person (name) { // 构造函数
// // // // //     this.name = name;
// // // // // }

// // // // // var person1 = new Person('han') // person 为实例

// // // // // new 运算符

// // // // function Person (name) { // 构造函数
// // // //     this.name = name;
// // // // }

// // // // var new2 = function (func, ...args) {
// // // //     var o = Object.create(func.prototype); // 创建对象
// // // //     var k = func.call(o, ...args); // 改变this指向
// // // //     if (k && k instanceof Object) { // 判断 k 类型是不是对象
// // // //         return k;
// // // //     } else {
// // // //         return o; //不是返回返回构造函数的执行结果
// // // //     }
// // // // }

// // // // var person2 = new2(Person, 'han');

// // // // console.log('person2', person2)

// // // // // function myNew () {
// // // // //     console.log('arguments', arguments)
// // // // //     var obj = {}
// // // // //     var constructorFunction = [].shift.call(arguments)
// // // // //     console.log('con', constructorFunction)
// // // // //     obj.__proto__ = constructorFunction.prototype
// // // // //     console.log('arguments', arguments)
// // // // //     var res = constructorFunction.apply(obj, arguments)
// // // // //     return res instanceof Object ? res : obj
// // // // // }

// // // // // var p3 = myNew(Person, 'han');

// // // // // console.log('p3', p3);

// // // // function myNew2 (func, ...args) {
// // // //     var obj = Object.create(func.prototype)
// // // //     console.log('obj', obj)
// // // //     var res = func.call(obj, ...args)
// // // //     return res instanceof Object ? res : obj
// // // // }


// // // // var p4 = myNew2(Person, 'handsome');
// // // // console.log('p4', p4)

// // // // 原型链继承
// // // function Animal (name) {
// // //     this.name = name || 'Animal';

// // //     this.sleep = function () {
// // //         console.log(this.name + '正在睡觉！');
// // //     }
// // // }

// // // Animal.prototype.eat = function (food) {
// // //     console.log(this.name + '正在吃' + food);
// // // }

// // // function Cat () {

// // // }

// // // Cat.prototype = new Animal();
// // // Cat.prototype.name = 'cat';

// // // // var cat = new Cat();

// // // // console.log(cat.name);
// // // // cat.eat('fish');
// // // // cat.sleep();
// // // // console.log(cat instanceof Animal);
// // // // console.log(cat instanceof Cat);

// // // // 构造继承 可以实现多继承， 但不能继承原型属性和方法
// // // function Cat2 (name) {
// // //     Animal.call(this);
// // //     this.name = name || 'Tom';
// // // }

// // // // var cat2 = new Cat2('Tomm');

// // // // console.log(cat2.name);
// // // // // cat2.eat('fish');
// // // // cat2.sleep();
// // // // console.log(cat2 instanceof Animal);
// // // // console.log(cat2 instanceof Cat2);

// // // // 实例继承 不限制调用方式 但不能多继承
// // // function Cat3 (name) {
// // //     var instance = new Animal();
// // //     instance.name = name || 'Tom';
// // //     return instance;
// // // }

// // // var cat3 = new Cat3('Tomm');

// // // // console.log(cat3.name);
// // // // cat3.eat('fish');
// // // // cat3.sleep();
// // // // console.log(cat3 instanceof Animal);
// // // // console.log(cat3 instanceof Cat3);

// // // // 拷贝继承 支持多继承，但效率低占用内存
// // // function Cat4 (name) {
// // //     var animal = new Animal();
// // //     for (const p in animal) {
// // //         Cat4.prototype[p] = animal[p];
// // //     }
// // //     Cat4.prototype.name = name || 'Tom';
// // // }

// // // // 组合继承
// // // function Cat5 (name) {
// // //     Animal.call(this);
// // //     this.name = name || 'Tom';
// // // }

// // // Cat.prototype = new Animal();
// // // Cat.prototype.constructor = Cat;

// // // // var cat5 = new Cat5('Tomm');

// // // // console.log(cat5.name);
// // // // // cat5.eat('fish');
// // // // cat5.sleep();
// // // // console.log(cat5 instanceof Animal);
// // // // console.log(cat5 instanceof Cat5);

// // // // 寄生组合继承
// // // function Cat6 (name) {
// // //     Animal.call(this);
// // //     this.name = name || 'Tom';
// // // }

// // // (function () {
// // //     var Super = function () { }
// // //     Super.prototype = Animal.prototype;
// // //     Cat.prototype = new Super();
// // // })();


// // // var cat6 = new Cat6('Tomm');

// // // console.log(cat6.name);
// // // // cat6.eat('fish');
// // // cat6.sleep();
// // // console.log(cat6 instanceof Animal);
// // // console.log(cat6 instanceof Cat6);

// // // // ES6 extends

// // // class Person {
// // //     constructor(skin, language) {
// // //         this.skin = skin;
// // //         this.language = language;
// // //     }

// // //     say () {
// // //         console.log('我是父类');
// // //     }
// // // }

// // // class Chinese extends Person {
// // //     constructor(skin, language, position) {
// // //         super(skin, language)
// // //         this.position = position;
// // //     }

// // //     aboutMe () {
// // //         console.log(`${this.skin} ${this.language}  ${this.position}`);
// // //     }
// // // }

// // // let obj = new Chinese('红色', '中文', '香港');
// // // obj.aboutMe();
// // // obj.say();


// // // 高阶函数 函数的参数是函数或者返回函数

// // // map reduce sort filter

// // // 柯里化

// // function curring (fn) {
// //     var len = fn.length;
// //     return function curr (...args1) {

// //     }
// // }


// // new 的作用 1、创建一个对象；2、this指向构造函数；3、构造函数有返回，会替换new出来的对象，如果没有就是new出来的对象。


// /**
//  * 对象声明的三种方式
//  * 字面量
//  * 构造函数
//  * 内置方法
//  */

// // let info = {
// //     friend: {
// //         name: '张三'
// //     },
// //     list: [1, 2, 3]
// // }

// // function observe (obj) {
// //     if (!obj || typeof obj !== 'object') return;

// //     for (const i in obj) {
// //         definePro(obj, i, obj[i]);
// //     }
// // }

// // function definePro (obj, key, value) {
// //     observe(value);

// //     Object.defineProperty(obj, key, {
// //         get () {
// //             return value;
// //         },
// //         set (newVal) {
// //             console.log('检测到变化！！！', newVal);
// //             value = newVal;
// //         }
// //     })
// // }

// // observe(info)

// // info.friend.name = '李四';
// // info.list[0] = 2222;

// // console.log('info', info);

// // 无法检测数值索引赋值，改变数组长度变化

// let handler = {
//     get (target, key, receiver) {
//         console.log('get', key);
//         return Reflect.get(target, key, receiver);
//     },
//     set (target, key, value, receiver) {
//         console.log('set', key, value);
//         return Reflect.set(target, key, value, receiver);
//     }
// }

// // let obj = {
// //     name: '张三'
// // }

// // let proxy = new Proxy(obj, handler);

// // console.log(proxy.name)
// // proxy.name = '李四';
// // proxy.sex = '男';

// function isPureObject (obj) { // obj 里面不在嵌套 obj 了
//     if (typeof obj !== 'object') {
//         return false;
//     } else {
//         for (let prop in obj) {
//             if (typeof obj[prop] === 'object') {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function addSubProxy (obj, handler) {
//     for (let prop in obj) {
//         if (typeof obj[prop] === 'object') {
//             if (!isPureObject(obj[prop])) addSubProxy(obj, handler);
//             obj[prop] = new Proxy(obj[prop], handler);
//         }
//     }
//     obj = new Proxy(obj, handler);
// }

// function toDeepProxy (obj, handler) {
//     if (!isPureObject) addSubProxy(obj, handler);
//     return new Proxy(obj, handler);
// }

// let object = {
//     name: {
//         first: {
//             four: 5,
//             second: {
//                 third: 'ssss'
//             }
//         }
//     },
//     class: 5,
//     arr: [1, 2, { arr1: 10 }],
//     age: {
//         age1: 10
//     }
// }
// //这是一个嵌套了对象和数组的数组
// let objectArr = [
//     {
//         name: {
//             first: 'ss'
//         },
//         arr1: [1, 2]
//     },
//     2, 3, 4, 5, 6
// ]

// object = toDeepProxy(object, handler);
// objectArr = toDeepProxy(objectArr, handler);

// objectArr.length
// objectArr[3];
// objectArr[2] = 10;

// objectArr[0].name.first = 'ss'
// objectArr[0].arr1[0]
// object.name.first.second.third = 'yyyyy'
// object.class = 6;
// object.name.first.four
// object.arr[2].arr1
// object.age.age1 = 20;

var timer = null;
var i = 0;
function setInterval () {
    timer = setTimeout(function () {
        console.log(i++);
        setInterval();
    }, 1000);
}
setInterval();


