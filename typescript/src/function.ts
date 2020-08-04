// 函数

const add = (a: number, b?: number | undefined): number => a + (b ? b : 0);

console.log(add(10));

const reduce = (a: number, ...rest: Array<number>): number => rest.reduce(((a, b) => a + b), a);