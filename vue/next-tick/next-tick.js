const callbacks = []
let pending = false

function flushCallbacks () {
    pending = false
    const copies = callbacks.slice(0)
    callbacks.length = 0
    for (let i = 0; i < copies.length; i++) {
        copies[i]()
    }
}

let microTimerFunc
const p = Promise.resolve()
microTimerFunc = () => {
    p.then(flushCallbacks)
}

function nextTick (cb, ctx) {
    let _resolve
    callbacks.push(() => {
        console.log('cb', cb, _resolve)
        if (cb) {
            cb.call(ctx)
        } else if (_resolve) {
            console.log('ctx', ctx)
            _resolve(ctx)
        }
    })

    if (!pending) {
        pending = true
        microTimerFunc()
    }

    if (!cb && typeof Promise !== undefined) {
        return new Promise(resolve => {
            _resolve = resolve
        })
    }
}

nextTick(function () {
    console.log(this.name)
}, { name: 'Han' })

nextTick(function () {
    console.log(this.name)
}, { name: 'Zhang' })

nextTick(null, { name: 'Sun' }).then(() => {
    console.log('then')
})