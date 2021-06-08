function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    }
}

Axios.prototype.request = function request(config) {
    let promise = Promise.resolve(config)
    let chain = []

    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift)
    }
    return promise
}

function InterceptorManager() {
    this.handles = []
}

InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handles.push({
        fulfilled: fulfilled,
        rejected: rejected
    })
    // 返回当前的索引，用于移除已注册的拦截器
    return this.handles.length - 1
}

const MemoryCache = {
    data: {},
    set(key, value, maxAge) {
        this.data[key] = {
            maxAge: maxAge || 0,
            value,
            now: Date.now()
        }
    },
    get(key) {
        const cacheItem = this.data[key]
        if (!cacheItem) return null
        const isExpired = Date.now() - cacheItem.now > cacheItem.maxAge
        isExpired && this.delete(key)
        return isExpired ? null : cacheItem.value
    },
    delete(key) {
        return delete this.data[key]
    },
    clear() {
        this.data = {}
    }
}