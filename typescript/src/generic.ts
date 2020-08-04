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

function getArrayLength<T>(arg: Array<T>) {
    console.log((arg as Array<T>).length)
    return arg
}

getArrayLength([1, 2, 3])

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