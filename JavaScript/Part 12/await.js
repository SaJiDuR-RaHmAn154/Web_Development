// await keyword j function er age thakbe onno surrounding async function k wait korabe jotokhon na current function er promise fulfilled or rejected na hoy

// function getNum() {
//     return new Promise((resolve, reject) => { //return a random number in terms of promise
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// //await keyword use koray jotokhon oi promise resolve or reject hoyni baki call hold a thakbe(aksathe print hobena)
// async function demo() {
//     await getNum(); //await keyword kebol async function er vitorei use kora jay
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
// console.log(demo());


// Color change using wait keyword

let h1 = document.querySelector('h1');

function newColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * 5) + 1;
            if (number > 3) {
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed!");
        }, delay);
    });
}

async function Demo1() {
    try {
        await newColor("violet", 1000);
        await newColor("indigo", 1000);
        await newColor("blue", 1000);//any promises can be rejected here
        await newColor("green", 1000);
        await newColor("yellow", 1000);
        await newColor("orange", 1000);
        await newColor("red", 1000);
    }
    // random number er upor vitti kore promise rejected hobe but rejected hole nicher print er kaj hossena
    // Here comes the topic Rejection Handling with await

    catch (error) {
        console.log("caught error")
        console.log(error);
    }
    // try-catch block thakar karone promise rejected hoyar poro nicher portion execute hobe
    let a = 5;
    console.log(a)
    console.log("New number=", a + 3);
}

console.log(Demo1());