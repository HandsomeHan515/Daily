function defineReactive (obj, key, value) {
    observer(value)
    Object.defineProperty(obj, key, {
        get () {
            console.log('get', key)
            return value
        },
        set (newVal) {
            if (newVal !== value) {
                console.log('set', key)
                value = newVal
            }
        }
    })
}

function observer (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function set (obj, key, value) {
    defineReactive(obj, key, value)
}

const obj = { a: 1, b: 2, c: { id: 1 } }

observer(obj)

obj.a
obj.a = 10

obj.c.id = 2

obj.d // don't console
set(obj, 'd', '3')
obj.d