function person (person) {
    return "I am " + person;
}
console.log(person('han'));
function calculate (a, b) {
    return a + b;
}
console.log(calculate(0.1, 0.2));
var list = [1, 2, 3];
var list2 = [2, 3, 4];
var list3 = ['1'];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
