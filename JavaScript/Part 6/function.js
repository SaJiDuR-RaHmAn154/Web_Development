// function is used to perform a specific task

function Greet() {
    console.log("Hello");
}

Greet();

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();

function Greet(name) {
    console.log("Hello,", name);
}

Greet("Sajid");

function MultiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n, '*', i, '=', n * i);
    }
}

MultiplicationTable(73);

function Sum(a, b) {
    return a + b;
}

console.log(Sum(3, 4));


// same name a global and function scope variable thakle function er vitore function scope er ta and bahire global scope er ta use hobe
// block scope (const,let er upor kaj kore),var er khetre kaj korena
// Lexical scope(for nested functions)(Bahirer function er variable inner function a use kora jabe)
// Inner function er variable outer function er vitore use kora jabena

function Result(arr) {
    let s = ""; // Function Scope variable (Also a block scope)
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

let a = ['Sajidur', 'Rahman', 'Tarafder'];//Global scope variable
console.log(Result(a));

// Higher order function(function passing as arguments)

function multipleGreet(func, count) { //Higher order function
    for (let i = 1; i <= count; i++) {
        func();
    }
}

let greet = function () { // Function expression(Storing a function in a variable)
    console.log("Hello");
}
multipleGreet(greet, 5); //passing a function
multipleGreet(function () { console.log("Hello"); }, 3);  // We can pass a whole function


// return of a function(User will get a function according to their request)
// Check in console about the func1 value

function oddOrEvenTest(request) {
    if (request == 'odd') {
        return function (n) {
            console.log(!(n % 2 == 0));//odd function
        }
    }
    else if (request == 'even') {
        return function (n) {
            console.log((n % 2 == 0));//even function
        }
    }
    else{
        console.log("Wrong Request");
    }
}
let request ='odd';
let func1 =oddOrEvenTest(request);//a function will be returned
console.log(func1);
