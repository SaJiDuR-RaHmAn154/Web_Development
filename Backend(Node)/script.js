let n = 5;

// Running JS in node.js runtime environment using node Script.js command
for(let i = 0;i<n;i++){
    console.log("hello, ",i);
}

console.log("Bye!!");

// ---------process object
// process -> node environment er object containing current runtime informations
// node REPL khule then type process
// process.cwd()->current directory
// process.argv

console.log(process.argv) //JS file kothay run hosse sei backend directory show korbe
// node Script.js hello bye (avabe arguments pass kora jabe jeta array te include hoye jabe)

// node Script.js Sajid Sakib Rajat (terminal command)
let args = process.argv;
for(let i = 2;i<args.length;i++){
    console.log("Hello",args[i]);
}

// export functionalities
// including modules from different files
// Run using node Script.js

const someValue = require("./math");
console.log(someValue);
console.log(someValue.mul(2,3));

// Importing directory Fruits
const info = require("./Fruits");
console.log(info);
console.log(info[1].name);

// npm (standard package manager of node.js) -> library of packages
// packages -> useful utilities that are developed by many developers (in-built)
// it's also a command line tool to install packages