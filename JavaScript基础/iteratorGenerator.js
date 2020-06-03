function iteratorGenerator (list) {
    var idx = 0
    var len = list.length
    return {
        next: function () {
            var done = idx >= len
            var value = !done ? list[idx++] : undefined
            return {
                done,
                value
            }
        }
    }
}

var iterator = iteratorGenerator(['1', '2', '3'])
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
