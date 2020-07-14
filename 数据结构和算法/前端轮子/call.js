/**
 * call 的函数实现
 */

Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function!');
    }

    context = context || window;
    context.fn = this;
    var result = context.fn(...args);
    delete context.fn;
    return result;
}