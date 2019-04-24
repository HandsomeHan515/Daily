let target = null
let data = { price: 5, quantity: 2 }

class Dep {
    constructor () {
        this.subscribers = []
    }

    depend () {
        if (target && !this.subscribers.includes(target)) {
            this.subscribers.push(target)
        }
    }

    notify () {
        this.subscribers.forEach(sub => sub())
    }
}

Object.keys(data).forEach(key => {
    let internalValue = data[key]
    const dep = new Dep() // Each property gets a dependency instance

    Object.defineProperty(data, key, {
        get () {
            dep.depend() // Remember the target we'er running
            return internalValue
        },
        set (newVal) {
            internalValue = newVal
            dep.notify() // Re-run stored functions
        }
    })
})

function watcher (myFunc) {
    target = myFunc
    target()
    target = null
}

watcher(() => {
    data.total = data.price * data.quantity
})

console.log(data.price) // 5
console.log(data.quantity) // 3
console.log(data.total) // 10

data.price = 20
console.log(data.total) // 40

data.quantity = 3
console.log(data.total) // 60