// 3 dots use hoy
// iterable items er protita values alada alada vabe dekhabe
//[] ->ata use korlei array
//{}-> use korlei object

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(...num);//Individually console.log a pathasse 'spread'
console.log(Math.min(...num));
console.log(Math.max(...num));
console.log(..."SajiurRahmanTarafder");

// spread (Array literals)
let newArr = [...num];// num array te change korle newArr te change hobena karon ata new array
console.log(newArr);

let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 3, 5, 7, 9];

let k = [...arr2, ...arr1];
let p = [...arr1, ...arr2];
console.log(k);
console.log(p);

//Spread (object literals)

const data = {
    email: "sajidurrahmantarafder@gmail.com",
    pass: 123456
};

const dataCopy = { ...data, id: 103050,country:"BD" };//new key-value o assign kora hosse and data er value o copy hosse
console.log(dataCopy);


// array k object akare store korle index key hobe and value value er jaygay assign hobe
let m =[1,2,3,4,5,6];//value
const obj = {...m};
let obj1 ={..."hello"}; //index key hobe and char value hobe

console.log(obj); 
console.log(obj1);