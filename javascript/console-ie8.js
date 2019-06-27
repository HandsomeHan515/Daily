// IE 8 console.log 

// https://caniuse.com/#search=console
// Only supports console functions when developer tools are open, 
// otherwise the console object is undefined and any calls will throw errors.

// https://stackoverflow.com/questions/690251/what-happened-to-console-log-in-ie8/

(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error',
        'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'profile', 'profileEnd',
        'table', 'time', 'timeEnd', 'timeLog', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());