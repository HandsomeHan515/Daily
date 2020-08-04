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
function getArrayLength(arg) {
    console.log(arg.length);
    return arg;
}
getArrayLength([1, 2, 3]);
// 泛型类
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
