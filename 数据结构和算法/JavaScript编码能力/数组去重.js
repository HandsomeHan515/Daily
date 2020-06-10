var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

/**
 * indexOf ES5
 */

function unique (arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i]);
        }
    }
    return array;
}


console.log(unique(arr)); // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}] 不能去重 NaN 和 {}

/**
 * includes ES6
 */

function unique2 (arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array
}
console.log(unique2(arr)) // [ 1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {}, {} ] 不能去重 {}


/**
 * Set
 */
console.log([...new Set(arr)]) // [ 1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {}, {} ] 不能去重 {}

/**
 * filter + hasOwnProperty
 */

function unique3 (arr) {
    var obj = {}
    return arr.filter(function (item, index, arr) {
        console.log(obj.hasOwnProperty(typeof item + item), obj[typeof item + item] = true)
        let a = obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
        return a;
    })
}

console.log(unique3(arr)) // [ 1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {} ]
