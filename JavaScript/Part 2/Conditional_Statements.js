// Provides boolean values
// if-else
// nested if-else
// switch

let age = 17;

if (age >= 18) {
    console.log('You can vote\n');
}
else {
    console.log("You can't vote\n");
}

// else if o similar to c++ 

let month = "april"

if (month === 'january') {
    console.log('Winter is here')
}
else {
    console.log('Summer is here')
}

// Switch statement

let color = "orange";

switch (color) {
    case "red": console.log("Stop");
        break;
    case "green": console.log("Slow down");
        break;
    case "blue": console.log("Go");
        break;
    default:
        console.log("Broken Light");
}