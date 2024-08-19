// async and await keywords

// all async function returns a promise by default(an object)


async function greet1() {
}
async function greet2() {//rejected promise
    throw "404 page not found";
    abc.abc();
}
async function greet3() {
    return "Hello";
}

// console.log(greet1());//check console(returns a promise)
// console.log(greet2());//this promise state will be rejected check console
// console.log(greet3());//check console(returns a promise)

greet3()
    .then((result) => {
        console.log("promise was resolved");
        console.log("Result was:", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
    })

greet2()
    .then((result) => {
        console.log("promise was resolved");
        console.log("Result was:", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("Error:", error);
    })

// Arrow function keo async banano jabe

let demo = async () => { return 5; };
console.log(demo());

