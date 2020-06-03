"use strict";

var eq, deepEq;
eq = function (a, b, aStack, bStack) {
    // 0 === -0 return true, but they are not identical.
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null) return false;
    if (a !== a) return b !== b;
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
}

deepEq = function (a, b, aStack, bStack) {
    var className = Object.prototype.toString.call(a);
    if (className !== Object.prototype.toString.call(b)) return false;
    switch (className) {
        case '[object RegExp]':
        case '[object String]':
            return '' + a === '' + b;
        case '[object Number]':
            if (+a !== +a) return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            return +a === +b;
    }
    var isArrays = className === '[object Array]';
    if (!isArrays) {
        if (typeof a != 'object' || typeof b != 'object') return false
    }

    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        if (aStack[length] === a) return bStack[length] === b;
    }

    aStack.push(a);
    bStack.push(b);

    if (isArrays) {
        length = a.length;
        if (length !== b.length) return false;
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack)) return false;
        }
    } else {
        var keys = Object.keys(a), key;
        length = keys.length;
        if (Object.keys(b).length !== length) return false;
        while (length--) {
            key = keys[length];
            if (!eq(a[key], b[key], aStack, bStack)) return false
        }
    }

    aStack.pop();
    bStack.pop();
    return true;
}

function isEqual (a, b) {
    return eq(a, b);
}

let a = isEqual({ name: 'han', age: 22 }, { name: 'han', age: 22 })
console.log('a', a)