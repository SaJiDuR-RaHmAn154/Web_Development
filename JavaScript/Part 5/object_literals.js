// Used to store keyd collections and complex entities
// Custom datatype
//key-value pair will be stored here
//objects are a collection of key-value pairs(properties)

//One type of dictionary of python
let students = {
    name: "Sajid",
    age: 23,
    marks: 9,
    city: "Rangpur",
    2: undefined
};

console.log(typeof (students));
console.log(students);

students['city'] = "Rajshahi";//Value changed 
console.log(students);

// let na diye const use korle oi object er reference k change kora jabena array er moto
//JS object er sob key gulake string a convert kore fele

//Accessing values
console.log(students.name);
console.log(students['age']);
console.log(students[2]);//akhane 2 age string a convert hoise then compare hoise then value print hoise
// console.log(students.2);//not valid(here we will use [])

//add/update value

students['Gender']='male';//Two ways to update
students.Id =1234;
students.marks=[90,92,95,98];
console.log(students);

delete students.Id; //Deleting a key-value pair
console.log(students);

//  Object of objects

// const classInfo ={
//     sajid:{
//         roll:2003154,
//         grade:3.94
//     },
//     antor:{
//         roll:2003139,
//         grade:3.95
//     },
//     sohan:{
//         roll:2003155,
//         grade:3.48
//     }
// };

// console.log(classInfo);
// console.log(classInfo.antor.grade);

// Array of objects
const classInfo =[
    sajid={
        roll:2003154,
        grade:3.94
    },
    antor={
        roll:2003139,
        grade:3.95
    },
    sohan={
        roll:2003155,
        grade:3.48
    }
];
console.log(classInfo);
console.log(classInfo[1].grade);
classInfo[1].city = "Dhaka";
console.log(classInfo);