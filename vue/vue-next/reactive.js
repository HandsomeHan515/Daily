// // let data = { foo: 'foo' }
// let data = [1, 2, 3,]

// let p = new Proxy(data, {
//     get (target, key, receiver) {
//         console.log('get value', key)
//         return target[key]
//     },
//     set (target, key, value, receiver) {
//         console.log('set value', target, key, value)
//         target[key] = value
//         return true
//     }
// })

// p.push(4)

// let data = { a: { b: { c: 1 } } }
// let p = new Proxy(data, {
//     get (target, key, receiver) {
//         const res = Reflect.get(target, key, receiver)
//         console.log(res)
//         return res
//     },
//     set (target, key, value, receiver) {
//         return Reflect.set(target, key, value, receiver)
//     }
// })

// p.a.b.c = 2

// 解决多次触发 set/get
// function reactive (data, cb) {
//     let timer = null
//     return new Proxy(data, {
//         get (target, key, receiver) {
//             return Reflect.get(target, key, receiver)
//         },
//         set (target, key, value, receiver) {
//             clearTimeout(timer)
//             timer = setTimeout(() => {
//                 cb && cb()
//             }, 0)
//             return Reflect.set(target, key, value, receiver)
//         }
//     })
// }

// let arr = [1, 2, 3]
// let p = reactive(arr, () => {
//     console.log('trigger')
// })

// p.push(123)

// 解决数据深度检测

// function reactive (data, cb) {
//     let timer = null
//     let res = null

//     res = data instanceof Array ? [] : {}

//     for (let key in data) {
//         if (typeof data[key] === 'object') {
//             res[key] = reactive(data[key], cb)
//         } else {
//             res[key] = data[key]
//         }
//     }

//     return new Proxy(res, {
//         get (target, key, receiver) {
//             return Reflect.get(target, key, receiver)
//         },
//         set (target, key, value, receiver) {
//             let res = Reflect.set(target, key, value, receiver)
//             clearTimeout(timer)
//             timer = setTimeout(() => {
//                 cb && cb()
//             }, 0)
//             return res
//         }
//     })
// }

// let data = { foo: 'foo', bar: [1, 2] }
// let p = reactive(data, () => {
//     console.log('trigger')
// })
// p.bar.push(3)

// console.log(p)

const rawToReactive = new WeakMap()
const reactiveToRaw = new WeakMap()

function isObject (val) {
    return typeof val === 'object'
}

function hasOwn (val, key) {
    const hasOwnProperty = Object.prototype.hasOwnProperty
    return hasOwnProperty.call(val, key)
}

//traps 
function createGetter () {
    return function get (target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        return isObject(res) ? reactive(res) : res
    }
}

function set (target, key, val, receiver) {
    const hadKey = hasOwn(target, key)
    const oldValue = target[key]

    val = reactiveToRaw.get(val) || val
    const result = Reflect.set(target, key, val, receiver)

    if (!hadKey) {
        console.log('trigger')
    } else if (val !== oldValue) {
        console.log('trigger')
    }

    return result
}

// handle
const mutableHandlers = {
    get: createGetter(),
    set: set
}

// entry 
function reactive (target) {
    return createReactiveObject(
        target,
        rawToReactive,
        reactiveToRaw,
        mutableHandlers
    )
}

function createReactiveObject (target, toProxy, toRaw, baseHandlers) {
    // 原数据已经有相应的可响应数据，返回可相应数据
    let observed = toProxy.get(target)
    if (observed !== void 666) {
        return observed
    }
    // 原数据已经是可响应的
    if (toRaw.has(target)) {
        return target
    }

    observed = new Proxy(target, baseHandlers)
    toProxy.set(target, observed)
    toRaw.set(observed, target)

    return observed
}

let data = { foo: 'foo', arr: [1, 2, 3] }

let p = reactive(data)
console.log('p', p)