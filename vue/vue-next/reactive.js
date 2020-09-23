let toProxy = new WeakMap()
let toRaw = new WeakMap()

function isObject (value) {
    return typeof value === 'object' && value !== null
}

function hasOwn (target, key) {
    return target.hasOwnProperty(key)
}

function reactive (target) {
    return createReactiveObject(target)
}

function createReactiveObject (target) {
    if (!isObject(target)) {
        return target
    }
    let proxy = toProxy.get(target)
    if (proxy) return proxy

    if (toRaw.has(target)) {
        return target
    }

    let baseHandler = {
        get (target, key, receiver) {
            let result = Reflect.get(target, key, receiver)
            // 收集依赖 订阅 当前 key 和 effect 对应
            track(target, key) // 目标上的 key 变化了，让数组中的 effect 执行
            return isObject(result) ? reactive(result) : result
        },
        set (target, key, value, receiver) {
            let hadKey = hasOwn(target, key) // 之前是否存在这个 key , 不存在为新增，存在即为修改属性
            let oldValue = target[key] // 旧值
            let res = Reflect.set(target, key, value, receiver)
            if (!hadKey) {
                console.log('新增属性')
                trigger(target, 'add', key)
            } else if (oldValue !== value) {
                console.log('修改属性')
                trigger(target, 'set', key)
            }
            return res
        },
        deleteProperty (target, key) {
            let res = Reflect.deleteProperty(target, key)
            console.log('delete');
            return res
        }
    }

    let observed = new Proxy(target, baseHandler)

    toProxy.set(target, observed)
    toRaw.set(observed, target)

    return observed
}

let activeEffectStacks = []

let targetMap = new WeakMap()
function track (target, key) {
    let effect = activeEffectStacks[activeEffectStacks.length - 1]
    if (effect) {
        let depsMap = targetMap.get(target)
        if (!depsMap) {
            targetMap.set(target, depsMap = new Map())
        }
        let deps = depsMap.get(key)
        if (!deps) {
            depsMap.set(key, deps = new Set())
        }
        if (!deps.has(effect)) {
            deps.add(effect)
        }
    }
}

function trigger (target, key) {
    let depsMap = targetMap.get(target)
    if (depsMap) {
        let deps = depsMap.get(key)
        if (deps) {
            deps.forEach(effect => effect())
        }
    }
}

function effect (fn) {
    let effect = createReactiveEffect(fn)
    effect()
}

function createReactiveEffect (fn) {
    let effect = function () {
        return run(effect, fn) // 1 让fn 执行 2 把 effect 存到栈中
    }
    return effect
}


function run (effect, fn) { // 运行 fn 并将 effect 存起来
    try {
        activeEffectStacks.push(effect)
        fn()
    } finally {
        activeEffectStacks.pop()
    }
}

/**
 * 数组 push 触发 新增值和 length 的修改
 * let proxy = reactive([1, 2, 3])
 * proxy.push(4)
 * proxy.length = 10
 */


let obj = reactive({ name: 'han' })
effect(() => { // 执行两次，默认先执行一次，依赖数据变了，会再次执行
    console.log(obj.name)
})

obj.name = 'handsome'
obj.name = 'handsomes'