function getOffsetValue (obj) {
    var l = 0,
        t = 0;

    while (obj) {
        l = l + obj.offsetLeft + obj.clientLeft;
        t = t + obj.offsetTop + obj.clientTop;
        obj = obj.offsetParent;
    }
    return { left: l, top: t };
}