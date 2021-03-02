"use strict";
/* 泛型 */
function returnItem(para) {
    return para;
}
console.log(returnItem('string'));
// 多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([1, 2]));
// 泛型变量
function getArrayLength(arg) {
    // console.log((arg as Array<T>).length)
    return arg.length;
}
const returnItem1 = para => para;
// 泛型类
class Stack {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
}
class Stack1 {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
}
const stack = new Stack1();
