// onekgulo then use kora
// Improved Version

function saveToDB(data) { //now this function is returning a promise

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;//internet speed er upor depend korbe koto fast data save hobe or hobena

        if (internetSpeed > 4) {//success=resolve
            resolve("success: data was saved.");
        }
        else {//reject=failure 
            reject("failure: weak connection.");//this resolve and reject messages will be returned in the default paramters
        }
    })
}

// This is much more readable than callback hell
saveToDB("Sajidur Rahman")
    .then((result) => {//promise fulfilled hole kono operation perform korte then() use kora hoy
        console.log("data1 saved.");
        console.log("Result of promise:", result)
        return saveToDB("Hello world");//1st data saved hole 2nd data er jonno call return korbe and then execute hobe(and this looks more simplier than before)
    })
    .then((result) => {
        console.log("data2 saved");//ajonno alada catch er dorkar nai
        console.log("Result of promise:", result)
        return saveToDB("Sakib");//3rd data save korar jonno ata call hobe
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("Result of promise:", result)
    })

    .catch((error) => {
        console.log("promise was rejected");//promise rejected hole j error asto seta akhon r asbena(ai action perform hobe)
        console.log("Error of promise:", error)
    })