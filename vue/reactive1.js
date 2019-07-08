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
target = () => { total = price * quantity }

record()
target()
price = 20
console.log(total)
replay()
console.log(total)