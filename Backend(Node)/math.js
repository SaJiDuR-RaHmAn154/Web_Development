const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// This file is exporting some data to another file in the backend(it sends an object )
// module.exports;(empty object will be sent)
// module.exports ="hello";

let obj = {
    sum:sum,
    mul:mul,
    g:g,
    PI:PI
};

module.exports = obj;

