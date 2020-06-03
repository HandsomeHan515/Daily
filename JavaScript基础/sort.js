const arr = [
    { id: 31 },
    { id: 13 },
    { id: 21 },
    { id: 331 },
    { id: 12 },
    { id: 13 },
    { id: 10 },
    { id: 91 },
    { id: 81 },
    { id: 71 },
    { id: 51 },
    { id: 61 },
    { id: 1 },
]

function compare (a, b) {
    if (a < b) {           // 按某种排序标准进行比较, a 小于 b
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

console.log(arr.sort((a, b) => compare(a.id, b.id)))

console.log(arr.sort((a, b) => {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0
}))

