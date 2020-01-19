// 简洁版
function debounce (cb) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb.apply(this, arguments)
            timer = null
        }, 1000);
    }
}

// 立即执行 + 自定义时间
function debounce (func, time, immediate) {
    var timer = null
    console.log('timer', timer)

    return function () {
        clearTimeout(timer)
        var context = this
        var args = arguments
        if (immediate) {
            if (!timer) {
                func.apply(this, args)
            }
            timer = setTimeout(function () {
                timer = null
            }, time)
        } else {
            timer = setTimeout(function () {
                func.apply(context, args)
            }, time)
        }
    }
}

// 防抖
function debounce (cb, wait) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb.apply(this, arguments)
        }, wait);
    }
}