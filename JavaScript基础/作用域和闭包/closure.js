function createFunctions () {
    var result = new Array();

    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }

    return result;
}

var arr = createFunctions();
arr = arr.map(e => e());
console.log('arr', arr); // [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]