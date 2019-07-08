// 简洁版
function debounce (cb) {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb.call(this, arguments)
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
                func.call(this, args)
            }
            timer = setTimeout(function () {
                timer = null
            }, time)
        } else {
            timer = setTimeout(function () {
                func.call(context, args)
            }, time)
        }
    }
}