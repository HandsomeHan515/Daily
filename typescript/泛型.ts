function returnItem<T>(param: T): T {
    return param
}

returnItem(123)

console.log(returnItem('han'))

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

console.log(swap([7, 'seven']))

function getArrayLength<T>(arg: Array<T>) {
    console.log(arg.length)
    return arg
}

// 泛型接口
interface ReturnItemFn<T> {
    (param: T): T
}

const returnitem: ReturnItemFn<number> = param => param

// 泛型类
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

// 泛型约束
type Params = number | string

class Stack2<T extends Params> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

const stack1 = new Stack2<number>()
const stack2 = new Stack2<string>()


// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

const a = {
    id: 1,
    name: 'han'
}

getValue(a, 'id')

// 使用多重类型进行泛型约束

interface FirstInterface {
    dosomething(): number
}

interface SecondInterface {
    dosomethingelse(): number
}

interface ChildrenInterface extends FirstInterface, SecondInterface {
    dosomethingthird(): number
}

class Demo<T extends ChildrenInterface> {
    private genericProperty: T

    useT() {
        this.genericProperty.dosomething
        this.genericProperty.dosomethingelse
        this.genericProperty.dosomethingthird
    }
}

// 泛型与new

function factory<T>(type: { new(): T }) {
    return new type()
}

class Person {
    name = 'xiaomuzhu';
    age = 20;
}

class Animal2 {
    name = 'petty';
    color = 'pink';
}
