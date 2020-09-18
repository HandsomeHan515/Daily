function defineReactive (obj, key, value) {
    observer(value)

    const dep = new Dep()
    Object.defineProperty(obj, key, {
        get () {
            console.log('get', key)
            Dep.target && dep.addDep(Dep.target)
            return value
        },
        set (newVal) {
            if (newVal !== value) {
                value = newVal
                console.log('set', key)
                dep.notify()
            }
        }
    })
}

function observer (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    new Observer(obj)
}

function proxy (vm, key) {
    Object.keys(vm[key]).forEach(k => {
        Object.defineProperty(vm, k, {
            get () {
                return vm[key][k]
            },
            set (v) {
                vm[key][k] = v
            }
        })
    })
}

class Observer {
    constructor(value) {
        this.walk(value)
    }

    walk (obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}

class Dep {
    constructor() {
        this.deps = []
    }

    addDep (watcher) {
        this.deps.push(watcher)
    }

    notify () {
        this.deps.forEach(watcher => watcher.update())
    }
}

class Watcher {
    constructor(vm, key, updateFn) {
        this.vm = vm
        this.key = key
        this.updateFn = updateFn

        Dep.target = this
        this.vm[this.key] // 触发 get
        Dep.target = null
    }

    update () {
        this.updateFn.call(this.vm, this.vm[this.key])
    }
}

class Compile {
    constructor(el, vm) {
        this.$el = document.querySelector(el)
        this.$vm = vm

        if (this.$el) {
            this.compile(this.$el)
        }
    }

    compile (el) {
        Array.from(el.childNodes).forEach(node => {
            if (node.nodeType === 1) { // 元素
                this.compileElement(node)
            } else if (this.isInter(node)) { // 文本
                this.compileText(node)
            }

            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
    }

    isInter (node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

    isDirective (attr) {
        return attr.indexOf('h-') === 0
    }

    update (node, exp, dir) {
        const fn = this[dir + 'Updater']
        // 初始化一个 get
        fn && fn(node, this.$vm[exp])
        // 更新
        new Watcher(this.$vm, exp, function (val) {
            fn && fn(node, val)
        })
    }

    compileText (node) {
        this.update(node, RegExp.$1, 'text')
    }

    text (node, exp) {
        this.update(node, exp, 'text')
    }

    textUpdater (node, val) {
        node.textContent = val
    }

    html (node, exp) {
        this.update(node, exp, 'html')
    }

    htmlUpdater (node, val) {
        node.innerHTML = val
    }

    compileElement (node) {
        const nodeAttrs = node.attributes

        Array.from(nodeAttrs).forEach(attr => {
            // 指令 h-xxx="yyy"
            const attrName = attr.name // h-xxx
            const exp = attr.value // yyy
            if (this.isDirective(attrName)) {
                const dir = attrName.substring(2) // xxx

                this[dir] && this[dir](node, exp)
            }
        })
    }
}


class HVue {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        // 响应式数据
        observer(this.$data)
        // 代理数据到当前 vm 上
        proxy(this, '$data')
        // 模板编译
        new Compile('#app', this)
    }
}