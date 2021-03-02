function greeter(person: string): string {
  return 'Hello' + person
}

const user = 'handsome'

// 布尔类型
const isLoading: boolean = false
// 数字类型 
const num: number = 10
const decLiteral: number = 6
const hexLiteral: number = 0xf00d
const binaryLiteral: number = 0b1010
const octalLiteral: number = 0o744
// 字符串
const book: string = '啦啦啦啦'
// 空值
function warnUser(): void {
  alert("This is my warning message");
}
/* 实际上只有null和undefined可以赋给void */
const vvv: void = undefined
// Null 和 Undefined
let aaa: undefined = undefined;
let bbb: null = null;
// Symbol
const sym1 = Symbol('sym1')
// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER);

const max1 = max + 1n
const max2 = max + 2n

max1 === max2 // false
// Any
let notSure: any = 4
// unknown
let un: unknown
notSure.value = 4
// un.value = 10 (不确定是某个额类型之前，不能进行任何操作)
function getValue(value: unknown): string {
  if (value instanceof Date) {
    return value.toLocaleDateString()
  }
  return String(value)
}
// never
function error2(message: string): never {
  throw new Error(message)
}

let empty2: never[] = []
// 数组
const arr: Array<number> = [1, 2, 3]
const arr2: number[] = [4, 5, 6]
// 元组（Tuple）
let t: [string, number]
t = ['11', 10]
interface Tuple extends Array<string | number> {
  0: string,
  1: number,
  length: 2
}
const tuple: [string, number] = ['a', 1]
tuple.push(10)
// console.log(tuple[2]); 可以打印但是不能访问
// Object
enum Dir {
  center = 1
}
let vvvvv: object
vvvvv = [1]
console.log(vvvvv);


