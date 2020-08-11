export default {
    render (h) {
        return h('div', { class: 'active' }, [
            h('a', { href: 'https://www.baidu.com' }, 'hello world')
        ])
    }
}