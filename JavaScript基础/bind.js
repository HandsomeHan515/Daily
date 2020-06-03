var obj = {
    name: 'han'
}

function say (age, sex) {
    console.log('I am ' + this.name, age, sex)
}

say.bind(obj, 13)('男')

Function.prototype.mybind = function (context) {
    if (typeof context !== 'function') {
        throw new Error('This is not function')
    }

    var _this = this
    const args = [...arguments].slice(1)
    return function F () {
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}