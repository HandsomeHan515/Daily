"use strict";
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
// 抽象类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('1234');
    };
    return Animal;
}());
// const animal = new Animal();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log(123);
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.makeSound();
cat.move();
// 访问限定符
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.run = function () {
        console.log('run...');
    };
    Car.prototype.run2 = function () {
        this.run();
    };
    Car.prototype.run3 = function () {
        this.run2();
    };
    return Car;
}());
var car = new Car();
// car.run();
car.run2();
// car.run3();
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMW.prototype.init = function () {
        this.run3();
    };
    return BMW;
}(Car));
var bmw = new BMW();
bmw.init();
bmw.run2();
// bmw.run();
// bmw.run3();
