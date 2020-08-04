"use strict";
// 函数
var add = function (a, b) { return a + (b ? b : 0); };
console.log(add(10));
var reduce = function (a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.reduce((function (a, b) { return a + b; }), a);
};
