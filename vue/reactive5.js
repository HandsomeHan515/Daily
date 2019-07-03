// let target = null
// let data = { price: 5, quantity: 2 }

// class Dep {
//     constructor () {
//         this.subscribers = []
//     }
//     depend () {
//         if (target && !this.subscribers.includes(target)) {
//             this.subscribers.push(target)
//         }
//     }
//     notify () {
//         this.subscribers.forEach(sub => sub())
//     }
// }

// let deps = new Map()
// Object.keys(data).forEach(key => {
//     deps.set(key, new Dep())
// })

// let data_without_proxy = data;
// data = new Proxy(data_without_proxy, {
//     get (obj, key) {
//         deps.get(key).depend()
//         return obj[key]
//     },
//     set (obj, key, newVal) {
//         obj[key] = newVal
//         deps.get(key).notify()
//         return true
//     }
// })

// function watcher (myFunc) {
//     target = myFunc
//     target()
//     target = null
// }

// let total = 0
// watcher(() => {
//     total = data.price * data.quantity
// })

// console.log(data.price) // 5
// console.log(data.quantity) // 2
// console.log(total) // 10

// data.price = 20
// console.log(total) // 40

// data.quantity = 3
// console.log(total) // 60

// data.quantity = 4
// console.log(total) // 80


// deps.set('discount', new Dep())
// data['discount'] = 5

// let salePrice = 5

// watcher(() => {
//     salePrice = data.price - data.discount
// })

// console.log(salePrice) // 15

// data.discount = 7.5
// console.log(salePrice) // 12.5

let data = {a: 1, b: 10}
let data_without_proxy = data
data = new Proxy(data_without_proxy, {
    get(obj, key) {
        console.log('get ', obj[key])
        return obj[key]
    },
    set(obj, key, newVal) {
        console.log('set ', newVal)
        obj[key] = newVal
        return true
    }
})

data.a = 10
console.log(data.b)