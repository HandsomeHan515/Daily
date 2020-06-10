/**
 * 节流
 */

function throttle (fn, wait) {
    let timer = null;
    return function () {
        var args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, wait);
        }
    }
}