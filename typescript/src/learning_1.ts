// Readonly

const aa: {
    readonly name: string
} = { name: 'handsomehan' }

console.log(aa.name);

// aa.name = 'han'

type B<T> = T extends string ? '1' : '2'

const aaaa: B<string> = '1'
// const bbbb: B<number> = '1'

declare namespace obj {
    type a = number
}

// const age: obj.a = '2'

function getInfo(name: string): void;
function getInfo(age: number): void;
function getInfo(params: any): void {
    if (typeof params === 'string') {
        console.log('name', params);
    }
    if (typeof params === 'number') {
        console.log('age', params);

    }
}