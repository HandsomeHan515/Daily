/* 泛型 */

function returnItem<T>(para: T): T {
    return para
}
console.log(returnItem('string'));

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
console.log(swap([1, 2]));
// 泛型变量
function getArrayLength<T>(arg: Array<T>) {
    // console.log((arg as Array<T>).length)
    return arg.length
}
// 泛型接口
interface retureItemFn<T> {
    (para: T): T
}

const returnItem1: retureItemFn<number> = para => para

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

class Stack1<T extends Params> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

const stack = new Stack1<string>()