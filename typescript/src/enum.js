"use strict";
// 枚举类型
// 数字枚举
var Dir1;
(function (Dir1) {
    Dir1[Dir1["Up"] = 10] = "Up";
    Dir1[Dir1["Down"] = 11] = "Down";
    Dir1[Dir1["Left"] = 12] = "Left";
    Dir1[Dir1["Right"] = 13] = "Right";
})(Dir1 || (Dir1 = {}));
console.log(Dir1.Up === 10); // true 后面的值会进行累加
// 字符串枚举
var Dir2;
(function (Dir2) {
    Dir2["Up"] = "Up";
    Dir2["Down"] = "Down";
    Dir2["Left"] = "Left";
    Dir2["Right"] = "Right";
})(Dir2 || (Dir2 = {}));
console.log(Dir2.Up);
// 异构枚举
var Dir3;
(function (Dir3) {
    Dir3["Up"] = "Up";
    Dir3["Down"] = "Down";
    Dir3[Dir3["Left"] = 10] = "Left";
    Dir3[Dir3["Right"] = 11] = "Right";
})(Dir3 || (Dir3 = {}));
console.log(Dir3.Up, Dir3.Right, Dir3, Dir3[10]);
// 反向映射
console.log(Dir1, Dir3[10]);
