"use strict";
// 抽象类
class Animal {
    move() {
        console.log('1234');
    }
}
// const animal = new Animal();
class Cat extends Animal {
    makeSound() {
        console.log(123);
    }
}
const cat = new Cat();
cat.makeSound();
cat.move();
// 访问限定符
class Car {
    run() {
        console.log('run...');
    }
    run2() {
        this.run();
    }
    run3() {
        this.run2();
    }
}
const car = new Car();
// car.run();
car.run2();
// car.run3();
class BMW extends Car {
    init() {
        this.run3();
    }
}
const bmw = new BMW();
bmw.init();
bmw.run2();
// bmw.run();
// bmw.run3();
