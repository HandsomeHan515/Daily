const _ = require('lodash')

const tempFwqy = [
    { id: 1, name: 'han', age: 23 },
    { id: 2, name: 'han1', age: 24 },
    { id: 3, name: 'han2', age: 25 },
    { id: 4, name: 'han3', age: 26 },
    { id: 5, name: 'han4', age: 27 },
    { id: 6, name: 'han5', age: 28 },
]

const fwqy = [
    { id: 1, name: 'han', age: 23 },
    { id: 2, name: 'han1', age: 24 },
    { id: 3, name: 'han2', age: 25 },
    { id: 4, name: 'han333', age: 26 },
    { id: 5, name: 'han4', age: 27 },
    { id: 6, name: 'han5', age: 2228 },
]

console.log('diff', _.differenceWith(fwqy, tempFwqy, _.isEqual))

console.log('equal', _.isEqual(fwqy[3], tempFwqy[3]))