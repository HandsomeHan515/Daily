const tempFwqy = [
    { id: 1, name: 'han', age: 23 },
    { id: 2, name: 'han1', age: 24 },
    { id: 3, name: 'han2', age: 25 },
    { id: 4, name: 'han3', age: 26 },
    { id: 5, name: 'han4', age: 27 },
    { id: 6, name: 'han5', age: 28 },
]

const fwqy = [
    { id: 1, name: 'han', age: 23 },
    { id: 2, name: 'han1', age: 24 },
    { id: 3, name: 'han2', age: 25 },
    { id: 4, name: 'han333', age: 26 },
    { id: 5, name: 'han4', age: 27 },
    { id: 6, name: 'han5', age: 2228 },
]

const m = new Map()
const m2 = new Map()
tempFwqy.forEach(row => {
    m.set(row.id, row)
})

fwqy.forEach(row => {
    m2.set(row.id, row)
})
let a = []
for (const key of m.keys()) {
    const mRow = Object.values(m.get(key)).toString()
    const m2Row = Object.values(m2.get(key)).toString()
    if (mRow !== m2Row) {
        a.push(m2.get(key))
    }
}

console.log('a', a)
