// 抽象类
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('1234')
    }
}

// const animal = new Animal();

class Cat extends Animal {
    makeSound(): void {
        console.log(123)
    }
}

const cat = new Cat();
cat.makeSound();
cat.move();

// 访问限定符
class Car {
    private run() {
        console.log('run...')
    }

    public run2() {
        this.run()
    }

    protected run3() {
        this.run2();
    }
}

const car = new Car();
// car.run();
car.run2();
// car.run3();

class BMW extends Car {
    init(): void {
        this.run3()
    }
}

const bmw = new BMW();
bmw.init();
bmw.run2();
// bmw.run();
// bmw.run3();