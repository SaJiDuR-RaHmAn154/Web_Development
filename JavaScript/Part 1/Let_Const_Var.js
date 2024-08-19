// Keyword - reserved words (can't be used as variable name)
// semi-colon is not mandatory here. But it's a good practice of using semi-clon.

let age = 23 ; // proper way to declare a variable
age = age+1;
console.log(age);

let b;
console.log(b)  //undefined(not stored a value yet)

let num1=1;
let num2=2;

let finalSum = num1 + num2;
console.log(finalSum);


// const - used to create constant type variables

const year =2025;
// re-assignment is not valid (error)
// year = 2026;
console.log(year);

// var

const pi =3.1416;
let rad = 4  // var rad = 4 (old syntax of javaScript)

let area = pi*rad*rad;
console.log(area);
