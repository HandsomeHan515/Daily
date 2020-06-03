var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.time()
for (const key in arr) {
    // console.log(arr[key])
}
console.timeEnd()

console.time()
for (var index = 0; index < arr.length; index++) {
    // console.log(arr[index])
}
console.timeEnd()

console.time()
var index = -1
while (++index < arr.length) {
    // console.log(arr[index])
}
console.timeEnd()

console.time()
arr.forEach(function (item) {
    // console.log(item)
})
console.timeEnd()