/**
 * apply
 */

Function.prototype.myApply = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function!');
    }

    context.fn = this;
    var result = context.fn(...args);
    delete context.fn;
    return result;
}