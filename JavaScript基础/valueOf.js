// Object.prototype.valueOf = function () {
//     console.log('diao wo le ')
//     return {};
// }

// Object.prototype.toString = function () {
//     console.log('wo bei diao le')
//     return {};
// }

// let a = {};
// let b = '' + a;
// // let c = String(a);

// console.log(b);
// // console.log(c);

Object.prototype.valueOf = function () {
    return {};
}

Object.prototype.toString = function () {
    console.log("bbb")
    return 'bbb';
}

let a = {};
let b = +a;
// let c = Number(a);

console.log(b);
// console.log(c);