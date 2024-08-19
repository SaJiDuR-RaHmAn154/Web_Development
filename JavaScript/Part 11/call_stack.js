function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

// calling sequence in the stack ->  three() -> two() -> one()->one()->one()
three();

// JS is single threaded(executes one line at a time)
// Aktar por akta line execute hoyar nature - Synchronous nature
// setTimeout,setInteval,delay agula related nature JS er Asynchronous nature
// JS er asynchronous nature er karone bivinno somossa create hoy 

// API -> takes request and sends data or rejects the request
// When JS requests API to send data, it shouldn't wait until the data is received and the furthers steps are executed
// So,we can use callbacks

setTimeout(() => {
    console.log("Sajidur Rahman");
}, 2000);

console.log("Hello,");

// Here Hello is printed first.But js is single threaded.Then how is this possible?
// Browser setTimeout k execute korar kaj kore and  browser er code C++,C te lekha jegula multi threaded (so,wait o korte pare and baki kaj o korte pare)
// JS baki kaj korte thake.JS wait korar kaj korena.Browser k diye dey wait korar kaj
// Jokhon browser SetTimeout er kaj sesh hole JS k bole now execute it

