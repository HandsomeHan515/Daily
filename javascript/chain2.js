var $ = jquery = (function (window, undefined) {
    var jquery = function (nodeSelector) {
        this.nodes = document.querySelectorAll(nodeSelector)
    }
    jquery.prototype = {
        each (callback) {
            for (let i = 0; i < this.nodes.length; i++) {
                callback.call(this, i, this.nodes[i])
            }
        },
        addClass: function (classes) {
            let className = classes.split(' ');
            className.forEach(value => {
                this.each((i, obj) => {
                    obj.classList.add(value)
                })
            })
        },
        setText: function (text) {
            this.each((i, obj) => {
                obj.textContent = text
            })
        }
    }

    return function (nodeSelector) {
        console.dir(new jquery(nodeSelector))
        return new jquery(nodeSelector)
    }
})(window)