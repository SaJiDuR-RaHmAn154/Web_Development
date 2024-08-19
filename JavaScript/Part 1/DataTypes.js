// Primitive or basic types - Number,Boolean,String,Undefined,None
// Bigint, Symbol

// float,integer sob number data type er under ai ase

a = 25
b = -25
console.log(b)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(typeof(a)) //Number
console.log(typeof(5.9)) //Number
console.log(typeof(b)) //Number

name = "sajid"
console.log(typeof(name)) //String
console.log(typeof('a')) //String

console.log(typeof(true))//Boolean


//Remainder (modulo)
console.log(12%7)

//Exponentiation(power operator)
console.log(2**4)

// We can change the type of a variable in JS

let age=23;
console.log(typeof(age));//number

age =true;
console.log(typeof(age));//changed to boolean

// String

let empty="";
let empty1=" ";
let role = 'ironman   tony    stark';
let k = 'Sajidur "Rahman"'
console.log(role);
console.log(k);
console.log(empty.length);
console.log(empty1.length);
console.log(typeof(empty));


console.log(k[5]);
console.log(k.length);
console.log(role.length);
console.log("sakib".length);
console.log("sakib"[0]);
console.log("sakib"[("sakib".length)-1]);

name = "sajidur" + " " + "rahman" + 1;
console.log(name)


// null and undefined

// undefined is a variable that is not assigned yet or we want to access a value which is not valid,then we will get undefined

let name1;
console.log(name1);
name1= "sajid";
console.log(name1[10000]);

// null - when we want to say the value of an object is absent.Then the value is none.
let year1 = null;
console.log(year1);

year1 = 2004;
console.log(year1);