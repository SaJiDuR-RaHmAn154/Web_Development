let x=10,y=20;
//  ` -> back tick
console.log("The total price is:",x+y,"rupees")
console.log(`The total price is: ${x+y} rupees`)//Template literal

// >,<,>=,<=,!=,==(Comparison operators)-> boolean value
console.log(0 == '');
console.log(0 == false);
console.log(1 == false);
console.log(1 == true);
console.log(0 == '   ');
console.log(null==undefined);

//  ===(triple equal) -> compares type and value
console.log("Triple Equal")
console.log("123"===123);
console.log(1==='1');
console.log(0==='');
console.log(null===undefined);

// Character er comparison Unicode er basis a hoye thake in JS
console.log('Character comparison')
console.log('a'>'B');
console.log('*'<'&');