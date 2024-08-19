// Every element er jonno True holei true return korbe

let num = [2,4,6,8,9];

console.log(num.every((ele)=> {return !(ele%2);}));

// some function logical or er moto kaj kore

console.log(num.some((ele)=> {return !(ele%2);}));