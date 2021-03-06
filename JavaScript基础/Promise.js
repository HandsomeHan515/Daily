const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executor) {
    let self = this
    self.status = PENDING
    self.value = undefined
    self.onResolvedCallbacks = []
    self.onRejectedCallbacks = []

    function resolve (value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        setTimeout(function () {
            if (self.status === PENDING) {
                self.status = FULFILLED
                self.value = value
                self.onResolvedCallbacks.forEach(cb => cb(self.value))
            }
        }, 0)
    }

    function reject (reason) {
        setTimeout(function () {
            if (self.status === PENDING) {
                self.status = REJECTED
                self.value = reason
                self.onRejectedCallbacks.forEach(cb => cb(self.value))
            }
        }, 0)
    }

    try {
        executor(resolve, rejected)
    } catch (e) {
        rejected(e)
    }
}

function resolvePromise (promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用'))
    }
    let called = false
    if (x instanceof Promise) {
        if (x.status === PENDING) {
            x.then(function (y) {
                resolvePromise(promise2, y, resolve, reject)
            }, reject)
        } else {
            x.then(resolve, reject)
        }
    } else if (x !== null && ((typeof x === 'object') || (typeof x === 'function'))) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, function (err) {
                    called = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

Promise.prototype.then = function (onFulFilled, onRejected) {
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw (reason) }
    let self = this
    let promise2
    if (self.status === FULFILLED) {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    let x = onFulFilled(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        })
    }
    if (self.status === REJECTED) {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    let x = onRejected(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0)
        })
    }
    if (self.status === PENDING) {
        return promise2 = new Promise(function (resolve, reject) {
            self.onResolvedCallbacks.push(function () {
                try {
                    let x = onFulFilled(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
            self.onRejectedCallbacks.push(function () {
                try {
                    let x = onRejected(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}
