function person(person: string) {
    return `I am ${person}`
}

console.log(person('han'))

function calculate(a: number, b: number): number {
    return a + b
}

console.log(calculate(0.1, 0.2))

const list: Array<number> = [1, 2, 3]
const list2: number[] = [2, 3, 4]
const list3: Array<string> = ['1']


enum Direction {
    Up,
    Down,
    Left,
    Right
}