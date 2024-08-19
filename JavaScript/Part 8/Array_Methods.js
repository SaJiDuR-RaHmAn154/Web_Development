// these methods are higher order methods that takes function as callbacks

// arr.forEach(some function definition or name);//protita element er jonno kaj korbe

let arr = [1, 2, 3, 4, 5];

// function print(ele){
//     console.log(ele);
// }

// arr.forEach(print);

// Or

arr.forEach(function print(ele) { console.log(ele); });//direct implementation

// or
console.log("Arrow Function")
arr.forEach((ele) => { console.log(ele); });

// Array of objects

let arr1 = [{
    name: "Sajid",
    marks: 93
}, {
    name: "Sohan",
    marks: 94
}, {
    name: "Antor",
    marks: 95
}];

// console.log(arr1);

arr1.forEach((student) => { console.log(student); });
arr1.forEach((student) => { console.log(student.marks); });


