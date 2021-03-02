"use strict";
// 函数
const add = (a, b) => a + (b ? b : 0);
console.log(add(10));
const reduce = (a, ...rest) => rest.reduce(((a, b) => a + b), a);
