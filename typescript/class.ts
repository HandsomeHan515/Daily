class Animal {
    age: number

    constructor(age: number) {
        this.age = age
    }

    private tell() {
        console.log('I am ' + this.age + ' year old!')
    }
}


class Dog extends Animal {
    fullName: string;
    private firstName: string;

    constructor(firstName: string, public middleInitial: string, public lastName: string, public age: number) {
        super(age)
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    public say() {
        console.log('my name is ' + this.fullName)
    }
}

const animal = new Animal(10)
console.log('animal', animal)

const dog = new Dog('xutao', '是', 'wu', 40)
console.log('dog', dog)
dog.say()