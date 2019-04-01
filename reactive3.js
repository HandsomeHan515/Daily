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

function watcher (myFunc) {
    target = myFunc
    dep.depend()
    target()
    target = null
}

const dep = new Dep()

let price = 5
let quantity = 2
let total = 0
let target = () => { total = price * quantity } 
watcher(target)

price = 20
console.log(total)
dep.notify()
console.log(total)
price = 40
dep.notify()
console.log(total)
