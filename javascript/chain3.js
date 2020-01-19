var $ = jQuery = (function (window, undefined) {
    function jQuery (dom, selector) {
        let i, len = dom ? dom.length : 0;
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len;
        this.selector = selector || '';
        return this
    }
})(window)