(function (window, undefined) {
    window.$ = jquery = function (nodeSelector) {
        let nodes = {};
        if (typeof nodeSelector === 'string') { // 判断引用类型时返回 object instanceof 返回具体的
            let temp = document.querySelectorAll(nodeSelector);
            for (let i = 0; i < temp.length; i++) {
                nodes[i] = temp[i]
            }
            nodes.length = temp.length;
        } else {
            throw new Error('必须输入字符串')
        }

        nodes.addClass = function (classes) {
            let className = classes.split(' ');
            className.forEach(value => {
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].classList.add(value)

                }
            })
        }

        nodes.setText = function (text) {
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].textContent = text
            }
        }

        return nodes
    }
})(window)