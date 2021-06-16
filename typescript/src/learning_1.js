// Readonly
var aa = { name: 'handsomehan' };
console.log(aa.name);
var aaaa = '1';
function getInfo(params) {
    if (typeof params === 'string') {
        console.log('name', params);
    }
    if (typeof params === 'number') {
        console.log('age', params);
    }
}
