function returnItem(param) {
    return param;
}
returnItem(123);
console.log(returnItem('han'));
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(swap([7, 'seven']));
function getArrayLength(arg) {
    console.log(arg.length);
    return arg;
}
var returnitem = function (param) { return param; };
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
var Stack2 = /** @class */ (function () {
    function Stack2() {
        this.arr = [];
    }
    Stack2.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack2.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack2;
}());
var stack1 = new Stack2();
var stack2 = new Stack2();
// 泛型约束与索引类型
function getValue(obj, key) {
    return obj[key];
}
var a = {
    id: 1,
    name: 'han'
};
getValue(a, 'id');
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.useT = function () {
        this.genericProperty.dosomething;
        this.genericProperty.dosomethingelse;
        this.genericProperty.dosomethingthird;
    };
    return Demo;
}());
