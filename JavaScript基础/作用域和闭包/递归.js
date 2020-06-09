/* 递归
 * @Author: hanshuai 
 * @Date: 2020-06-05 10:53:10 
 * @Last Modified by: hanshuai
 * @Last Modified time: 2020-06-05 10:57:29
 */

// "use strict";
/*
function factorial (num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * factorial(num - 1);
        return num * arguments.callee(num - 1); // 严格模式下不能使用
    }
}
*/

// 使用命名函数表达式
var factorial = function f (num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * factorial(num - 1);
        return num * f(num - 1); // 严格模式下不能使用
    }
}


console.log(factorial(3))

var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4))

