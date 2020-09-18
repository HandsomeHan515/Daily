const curring = (fn, arr = []) => {
    let len = fn.length
    return function (...args) {
        let newArgs = [...arr, ...args]
        if (newArgs.length === len) {
            return fn(...newArgs)
        } else {
            return curring(fn, newArgs)
        }
    }
}

const isType = (typing, val) => {
    return Object.prototype.toString.call(val) === `[object ${typing}]`
}

const newIsType = curring(isType)

const utils = {}
    ;['String', 'Boolean', 'Null', 'Number', 'Undefined',
        'Function', 'Array', 'Date', 'RegExp', 'Object'
    ].forEach(type => {
        utils[`is${type}`] = newIsType(type)
    })
