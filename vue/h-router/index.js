let Vue;

class Router {
    constructor(options) {
        this.$options = options
        this.routeMap = {}

        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init () {
        this.bindEvents()
        this.createRouteMap()
    }

    bindEvents () {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    onHashChange () {
        this.app.current = window.location.hash.slice('1') || '/'
    }

    createRouteMap () {
        this.$options.routes.forEach(item => {
            this.routeMap[item.path] = item
        })
    }

    initComponent () {
        Vue.component('router-link', {
            render: h => h('a', { attrs: { href: '#' + this.to } }, [this.$slots.default])
        })

        Vue.component('router-view', {
            render: h => h(this.routeMap[this.app.current].component)
        })
    }
}

Router.install = function (_vue) {
    Vue = _vue

    Vue.mixin({
        beforeCreate () {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
                this.$options.router.init()
            }
        }
    })
}