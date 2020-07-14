/**
 * bind
 */

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function!');
    }

    let self = this;
    let args = [...arguments].slice(1);
    return function F () {
        self.apply(context, args.concat(...arguments));
    }
}