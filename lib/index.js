"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var map = new Map();
map.set('han', 97);
map.set('zhang', 100);
console.log('han', map.get('han'));

var a = function a () {
    return 10;
};