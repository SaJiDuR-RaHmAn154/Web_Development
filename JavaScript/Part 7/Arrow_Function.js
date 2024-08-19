// nameless functions and assigned to variables
// Syntax
const sum =(a,b)=>{
    console.log(a+b);
}
sum(3,5);
console.log(sum);//returns a function

const cube =(a)=>{
    return a**3;
}

console.log(cube(4));

const power=(a,b)=>{
    return a**b;
}
console.log(power(3,4));

const square = a => //single parameter er jonno avabeo lekha jay
{
    return a*a;
}
console.log(square(5));

const Greet = ()=>{
    console.log("Hello World");
}

// Implicit return (when an arrow function only returns a value and doesn't perform any other work)

const mul = (a,b)=>a*b; //implicit return (helps single line return)

console.log(mul(2,4));