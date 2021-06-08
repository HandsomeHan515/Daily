function throttl(cb, wait) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                cb.apply(this, arguments)
                timer = null
            }, wait);
        }
    }
}