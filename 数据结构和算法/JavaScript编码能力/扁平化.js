let arr = [1, [2, [3, [4, 5]]], 6];

/**
 * 递归
 */

let result = [];

function flatten (arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (Array.isArray(item)) {
            flatten(item);
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten(arr));

/**
 * 扩展运算符
 */

let arr1 = [1, [2, [3, [4, 5]]], 6];

while (arr1.some(Array.isArray)) {
    console.log(arr1, 'h')
    arr1 = [].concat(...arr1);
    console.log(arr1, 's')
}

console.log('arr1', arr1);