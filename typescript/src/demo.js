"use strict";
function greeter(person) {
    return 'Hello' + person;
}
const user = 'handsome';
// 布尔类型
const isLoading = false;
// 数字类型 
const num = 10;
const decLiteral = 6;
const hexLiteral = 0xf00d;
const binaryLiteral = 0b1010;
const octalLiteral = 0o744;
// 字符串
const book = '啦啦啦啦';
// 空值
function warnUser() {
    alert("This is my warning message");
}
/* 实际上只有null和undefined可以赋给void */
const vvv = undefined;
// Null 和 Undefined
let aaa = undefined;
let bbb = null;
// Symbol
const sym1 = Symbol('sym1');
// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER);
const max1 = max + 1n;
const max2 = max + 2n;
max1 === max2; // false
// Any
let notSure = 4;
// unknown
let un;
notSure.value = 4;
// un.value = 10 (不确定是某个额类型之前，不能进行任何操作)
function getValue(value) {
    if (value instanceof Date) {
        return value.toLocaleDateString();
    }
    return String(value);
}
// never
function error2(message) {
    throw new Error(message);
}
let empty2 = [];
// 数组
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
// 元组（Tuple）
let t;
t = ['11', 10];
const tuple = ['a', 1];
tuple.push(10);
// console.log(tuple[2]); 可以打印但是不能访问
// Object
var Dir;
(function (Dir) {
    Dir[Dir["center"] = 1] = "center";
})(Dir || (Dir = {}));
let vvvvv;
vvvvv = [1];
console.log(vvvvv);
