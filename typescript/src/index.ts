let value: any = null;

// console.log(value.name)

let v2: unknown;


function error(message: string): never {
    throw new Error('23')
}

let empty: never[] = [];


// 数组
const list: Array<boolean> = [true, false, true]

const list2: string[] = ['222', '333']

// 元组 元组中包含的元素，必须与声明的类型一致，而且不能多、不能少，甚至顺序不能不符。
let x: [string, number, boolean]
x = ['name', 2, true]

// 元组实现
interface Tuple extends Array<number | string> {
    0: string,
    1: number,
    length: 2
}

let y: Tuple

y = ['name', 2]

// 枚举类型

// 第一个值赋值后,后面也会根据前一个值进行累加
enum Direction {
    Left = 10,
    Right = 13,
    Top,
    Bottom
}

enum Direction {
    Center = 50
}

console.log(Direction.Left)
console.log(Direction[10]);

// 默认不显示 Direction2, 添加 --preserveConstEnums 可显示
const enum Direction2 {
    Left = 10,
    Right = 13,
    Top,
    Bottom
}

console.log(Direction2.Left)
const a = Direction2.Top;
console.log(a)


// 接口 interface

interface Say {
    (word: string): string
}

interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say?: (words: string) => string
    say2?: Say
}

const getUserName = (user: User): string => {
    // user.isMale = false 
    return user.name
}

getUserName({ name: 'han', isMale: true });

// 断言
interface Config {
    width?: number;
}

function CalculateAreas(config: Config): { area: number } {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}

let mySquare = CalculateAreas({ wiedth: 5 } as Config);
console.log(mySquare)

// 可索引类型

interface Phone {
    [pdddd: string]: string
}

interface User2 {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}

var user2: User2 = {
    name: 'han',
    age: 12,
    isMale: true,
    say: () => '123',
    phone: {
        addr: '12',
        pp: '123'
    }
}