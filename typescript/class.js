var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
    }
    Animal.prototype.tell = function () {
        console.log('I am ' + this.age + ' year old!');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(firstName, middleInitial, lastName, age) {
        var _this = _super.call(this, age) || this;
        _this.middleInitial = middleInitial;
        _this.lastName = lastName;
        _this.age = age;
        _this.fullName = firstName + " " + middleInitial + " " + lastName;
        return _this;
    }
    Dog.prototype.say = function () {
        console.log('my name is ' + this.fullName);
    };
    return Dog;
}(Animal));
var animal = new Animal(10);
console.log('animal', animal);
var dog = new Dog('xutao', '是', 'wu', 40);
console.log('dog', dog);
dog.say();
