/**
 * 防抖 基础版
 * 如果短时间内大量触发同一事件，只会执行一次函数。
 */

function debounce (fn, wait) {
    var timer = null
    return function () {
        var context = this;
        var args = arguments;
        if (timer) clearTimeout(timer)

        timer = setTimeout(function () {
            fn.apply(context, args);
            timer = null;
        }, wait);
    }
}

/**
 * 防抖进阶版 （立即执行）
 */

function debounce (fn, wait, immediate) {
    let timer = null
    return function () {
        var args = arguments;
        if (immediate) {
            if (!timer) {
                fn.apply(this, args);
            }
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, wait);
        }
    }
}