// Array is a linear collection of things

let students = ["Sajid","Sakib","Shohan",1,2.5,'S'];
let emp =[]
console.log(emp.length);
console.log(emp[0]);
console.log([1,2,3,4].length);
console.log(students)
console.log(students[1]);
console.log(students.length);
console.log(typeof(students));//object
console.log(students[0][1]);//Sajid er a print hoise
console.log(students[0].length);//size of "Sajid"

// Arrays are mutable (original array can be changed)
students[0]="Sajidur";
students[10]="Sajidur";
console.log(students);
console.log(students.length);
console.log(students);
console.log(students[7]);//empty space

// Array Methods
students.push("Rahman");//adds at end
console.log(students);
console.log(students.pop());//removes from end and return
console.log(students);
students.unshift("Rahman");//adds at start
console.log(students);
console.log(students.shift());//removes from start and return
console.log(students);

// indexOf

console.log(students.indexOf("Sajidur"));//first occurence index
console.log(students.indexOf("Sakibur"));// -1 (khuje pay ni)

// includes

console.log(students.includes("Sajidur"));//true(khuje paise)
console.log(students.includes("Sakibur"));//false(khuje payni)

// concat and reverse

let a=[1,2,3,4];
let b=[5,6,7,8];
console.log(a.concat(b));//this is a new array (a,b unchanged thakbe)

a.reverse();
console.log(a);//main array ai reverse hoye jabe

// slice method

console.log(students.slice(1,4));//end index exclusive hobe and start will be included
console.log(students.slice(1));
console.log(students.slice(-1));//last index
console.log(students.slice(students.length));

// splice method (check documentation)

// Sort Method

let num = [500,4,70,10,25];
console.log(num.sort());//numbers er jonno thik vabe kaj korena(karon numbers string a convert hoye then sort hoy)

// Array Reference (Address alada alada hoy. Reference variable alada alada.So compare korle false hoy)

console.log([1]===[1]);
console.log([1]==[1]);
console.log([]===[]);
console.log([]==[]);

let arr=['a','b','c'];
let arrCpy=arr;
console.log(arr==arrCpy);//location of two arrays are equal
console.log(arr===arrCpy);
arr.push('d');
console.log(arrCpy);//arrCpy teo 'd' add hobe

// constant arrays

const arr1 = [1,2,3,5];
console.log(arr1);
arr1.push(9.8);
console.log(arr1);//new value add hoye jabe
// arr1 = [3,4,6,7];// This is invalid as new address is trying to be assigned in const address


// Nested Arrays (Multi Dimensional array)

let arr2 = [[1,2],[3,4],[5,6,7]];
console.log(arr2);
console.log(arr2[1].length);
console.log(arr2[2][2]);
console.log(arr2[2][4]);
 


