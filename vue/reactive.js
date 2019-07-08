function defineReactive (data, key, val) {
    let childOb = observe(val)
    let dep = new Dep()

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            dep.depend()

            if (childOb) {
                childOb.dep.depend()
            }
            return val
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }
            val = newVal
            dep.notify()
        }
    })
}

class Dep {
    constructor() {
        this.subs = []
    }

    addSub (sub) {
        this.subs.push(sub)
    }

    removeSub (sub) {
        remove(this.subs, sub)
    }

    depend () {
        if (Dep.target) {
            this.addSub(Dep.target)
        }
    }

    notify () {
        const subs = this.subs.slice()

        for (let i = 0; i < subs.length; i++) {
            subs[i].update()
        }
    }
}

function remove (arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}

class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm
        this.getter = parsePath(expOrFn)
        this.cb = cb
        this.value = this.get()
    }

    get () {
        Dep.target = this
        let value = this.getter.call(this.vm, this.vm)
        Dep.target = undefined
        return value
    }

    update () {
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }
}

const bailRE = /[^\w.$]/
function parsePath (path) {
    if (bailRE.test(path)) {
        return
    }
    const segments = path.split('.')
    return function (obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsToPatch.forEach(function (method) {
    const original = arrayProto[method]
    def(arrayMethods, method, function mutator (...args) {
        const result = original.apply(this, args)
        const ob = this.__ob__
        let inserted
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if (inserted) ob.observeArray(inserted)
        ob.dep.notify()
        return result
    })
});

const hasProto = '__proto__' in {}
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep()
        def(value, '__ob__', this)

        if (Array.isArray(value)) {
            if (hasProto) {
                protoAugment(value, arrayMethods)
            } else {
                copyAugment(value, arrayMethods, arrayKeys)
            }
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    walk (obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }

    observeArray (items) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }
}

function protoAugment (target, src) {
    target.__proto__ = src
}

function copyAugment (target, src, keys) {
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        def(target, key, src[key])
    }
}

function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}

function hasOwn (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key)
}

function observe (value, asRootData) {
    if (!isObject(value)) {
        return
    }

    let ob
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else {
        ob = new Observer(value)
    }
    return ob
}

function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

