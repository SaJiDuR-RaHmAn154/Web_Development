// trim method (used to remove white spaces from start and end but not from middle)
// string in JS is immutable (unchangable)
// New string a change hobe and old string unchanged thakbe

let msg= '   he  llo    ';
console.log(msg.trim());
console.log(msg); //main string er change hoy ni. New string a trim hoye print hoise

// Uppercase,Lower case methods

let str="Sajidur Rahman";
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Methods with arguments

// indexOf

let str1 = "IloveCoding";
console.log(str1.indexOf('C'));//5
console.log(str1.indexOf("love"));//1
console.log(str1.indexOf('A'));// -1


let msg1 = "   hello    ";
console.log(msg1);
let newMsg =msg1.trim().toUpperCase();//Method chaining (multiple methods similar time)
console.log(newMsg);

// Slice method

let msg2= "IloveCoding";
console.log(msg2.slice(-2));
console.log(msg2.slice(-3));// length - 3 theke sesh porjonto print hobe
console.log(msg2.slice(2));
console.log(msg2.slice(1,5));//(starting indexed,lastIndex+1)

// Replace method

let msg3= "IloveCoding";
console.log(msg3.replace("love","do"));//first occurence replace hobe
console.log(msg3.replace("C","P"));

// Repeat method
console.log(msg3.repeat(2));


