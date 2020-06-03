/**
 * getElementByClassName 的兼容方法
 * @param {string} oClass 
 * @param {string} parentId 
 */
function byClassName (oClass, parentId) {
    var tags = null,
        arr = [],
        reg = new RegExp('\\b' + oClass + '\\b');

    if (parentId) {
        var parentEl = document.getElementById(parentId);
        tags = parentEl.all || parentEl.getElementsByTagName('*');
    }
    tags = document.all || document.getElementsByTagName('*');

    for (var i = 0; i < tags.length; i++) {
        if (reg.test(tags[i].className)) {
            arr.push(tags[i]);
        }
    }
    return arr;
}

document.getElementsByClassName = document.getElementsByClassName || byClassName
