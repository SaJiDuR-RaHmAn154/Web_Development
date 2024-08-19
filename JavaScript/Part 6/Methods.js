//Actions that are performed on an object
// Object er jonno function define korle seta method

const calculator={
    add : function(a,b){
        return a+b;
    },
    subtraction:function(a,b){
        return a-b;
    },
    Multiplication(a,b){// key-value pair na koreo object a method define kora jay avabe
        return a*b;
    }
};

console.log(calculator);
console.log(calculator.add);// Agula console a dekha jabe
console.log(calculator.add(1,2));// Agula console a dekha jabe
console.log(calculator.Multiplication(-6,7));// Agula console a dekha jabe