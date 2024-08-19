// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;//internet speed er upor depend korbe koto fast data save hobe or hobena

//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// call back hell create hoise
//callbacks(callback hell-nested calls(seems confusing))

// saveToDB("Sajidur Rahman",
//     () => {
//         console.log("Success1: your data1 was saved.");
//         saveToDB("Hello World", () => {
//             console.log("success2: data2 saved.");//first data save hoye gele 2nd data save er jonno req pathabo
//             saveToDB("Data3", () => {
//                 console.log("success3: data3 saved.");
//             }, () => {
//                 console.log("failure3: data not saved");
//             });
//         }, () => {
//             console.log("failure2: weak connection.");
//         });
//     },
//     () => {
//         console.log("Failure: Weak connection. Data1 not saved.");
//     });


// Promises used to help us to get out from call back hells
// promise is one kind of object that  represents whether any task is gonna success or failure in further run

// ------promises (resolve(success call back),reject(failure callback)) ------
// Here is the optimization of previous hectic code using promises

function saveToDB(data) { //now this function is returning a promise

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;//internet speed er upor depend korbe koto fast data save hobe or hobena

        if (internetSpeed > 4) {//success=resolve
            resolve("success: data was saved.");
        }
        else {//reject=failure 
            reject("failure: weak connection.");
        }
    })
}

// let request = saveToDB("Sajidur Rahman")
// console.log(request);//check console(promise object a promiseState(pending,rejected,fulfilled))
// // rejected state er khetre error show korbe

// // ------then() and catch() methods------

// request.then(() => {//promise fulfilled hole kono operation perform korte then() use kora hoy
//     console.log("promise was resolved.");
// })
//     .catch(() => {
//         console.log("promise was rejected");//promise rejected hole j error asto seta akhon r asbena(ai action perform hobe)
//     })



// *******aro compact version a likha jay atake request a object store na kore direct

saveToDB("Sajidur Rahman").then(() => {//promise fulfilled hole kono operation perform korte then() use kora hoy
    console.log("promise was resolved.");
})
    .catch(() => {
        console.log("promise was rejected");//promise rejected hole j error asto seta akhon r asbena(ai action perform hobe)
    })