
// Map
let num = [1, 2, 3, 4];

let double = num.map((ele) => { return ele * 2; });//value jeta return korbe seta store korlam
console.log(double);


let students = [{
    name: "Sajid",
    marks: 93
}, {
    name: "Sohan",
    marks: 94
}, {
    name: "Antor",
    marks: 95
}];

let gpa = students.map((ele)=>{return ele.marks/10;});
console.log(gpa);

// Filter

let arr = [2,4,1,5,6,7,8,9,10];

let even = arr.filter((num)=>{return !(num%2);});// Even number gulake store korbe(True hole element store korbe otherwise korbe na)
console.log(even);