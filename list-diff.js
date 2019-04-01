var diff = require('list-diff2')

var oldList = [{id: "a"}, {id: "b"}, {id: "c"}, {id: "d"}, {id: "e"}]
var newList = [{id: "c"}, {id: "a"}, {id: "b"}, {id: "e"}, {id: "f"}]

var moves = diff(oldList, newList, "id")

console.log(moves)

// var before = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
// var after = [];
// var diffs = diff(before, after, 'id'); 
// console.log(diffs)