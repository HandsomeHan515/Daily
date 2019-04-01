let price = 5
let quantity = 2
let total = 0
let target = null
let storage = []

function record () {
    storage.push(target)
}

function replay () {
    storage.forEach(run => run())
}

// Save this code
target = function () {
    total = price * quantity
}
// Later on, run stored code again

record()
console.log(storage)

target()

console.log(total)
price = 20
replay()
console.log(total)






