var arr = ['3', '22']
var data = [{ id: '1', name: 'han' }, { id: '2', name: 'zhang' }, { id: '3', name: 'liu' }]

var d = data.filter(e => {
    return arr.indexOf(e.id) > -1
})
console.log('d', d)

var c = data.find(item => item.id === '111')

console.log('c', c)

if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);
            var len = o.length >>> 0;

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            var thisArg = arguments[1];

            var k = 0;

            while (k < len) {
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                k++;
            }

            return undefined;
        }
    });
}