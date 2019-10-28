const rawToReactive = new WeakMap() // 解决深度侦测
const reactiveToRaw = new WeakMap()

function isObject (val) {
    return typeof val === 'object'
}

function hasOwn (val, key) {
    return Object.prototype.hasOwnProperty.call(val, key)
}

//traps 
function createGetter () {
    return function get (target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        return isObject(res) ? reactive(res) : res
    }
}

function set (target, key, val, receiver) {
    console.log('t', target, key, val)
    const hadKey = hasOwn(target, key)
    const oldValue = target[key]

    val = reactiveToRaw.get(val) || val
    const result = Reflect.set(target, key, val, receiver)

    if (!hadKey) {
        console.log('trigger ... is a add OperationType')
    } else if (val !== oldValue) {
        console.log('trigger ... is a set OperationType')
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

let data = { foo: 'foo', arr: ['a', 'b'] }

let r = reactive(data)
console.log('r', r)
r.arr.push('c')