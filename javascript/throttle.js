function throttl (cb, wait) {
    let time = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                cb.apply(this, arguments)
                timer = null
            }, wait);
        }
    }
}