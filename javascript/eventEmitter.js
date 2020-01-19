class EventEmitter {
    constructor() {
        // 用于存储事件与回调之间的对应关系
        this.handlers = {}
    }

    on (eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }

        this.handlers[eventName].push(cb)
    }

    emit (eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(callback => {
                callback(args)
            })
        }
    }

    off (eventName, cb) {
        const callbacks = this.handlers[eventName]
        const index = callbacks.indexOf(cb)
        if (index !== -1) {
            callbacks.splice(index, 1)
        }
    }
    // TODO: what ?
    once (eventName, cb) {
        const wrapper = (...args) => {
            cb.apply(...args)
            this.off(eventName, wrapper)
        }

        this.on(eventName, wrapper)
    }
}