"use strict";
var value = null;
// console.log(value.name)
var v2;
function error(message) {
    throw new Error('23');
}
var empty = [];
// 数组
var list = [true, false, true];
var list2 = ['222', '333'];
// 元组 元组中包含的元素，必须与声明的类型一致，而且不能多、不能少，甚至顺序不能不符。
var x;
x = ['name', 2, true];
var y;
y = ['name', 2];
// 枚举类型
// 第一个值赋值后,后面也会根据前一个值进行累加
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 10] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
    Direction[Direction["Top"] = 14] = "Top";
    Direction[Direction["Bottom"] = 15] = "Bottom";
})(Direction || (Direction = {}));
(function (Direction) {
    Direction[Direction["Center"] = 50] = "Center";
})(Direction || (Direction = {}));
console.log(Direction.Left);
console.log(Direction[10]);
console.log(10 /* Left */);
var a = 14 /* Top */;
console.log(a);
var getUserName = function (user) {
    // user.isMale = false 
    return user.name;
};
getUserName({ name: 'han', isMale: true });
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare = CalculateAreas({ wiedth: 5 });
console.log(mySquare);
var user2 = {
    name: 'han',
    age: 12,
    isMale: true,
    say: function () { return '123'; },
    phone: {
        addr: '12',
        pp: '123'
    }
};
