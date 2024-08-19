
// ----CallBack Hell----

let h1 = document.querySelector('h1');

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
// nesting of callbacks(this type of code can be seen in production level)
// This asynchronous nature of JS can be solved using promises,await,async keywords

changeColor("violet", 1000, () => {
    changeColor("indigo", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("yellow", 1000, () => {
                    changeColor("orange", 1000, () => {
                        changeColor("red", 1000);
                    });
                });
            });
        });
    });
});



// Using promises to simplify callback hell

let h2 = document.querySelector('h2');

function newColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

newColor("violet", 1000)
    .then(() => {
        console.log("violet color was completed")
        return newColor("indigo", 1000);
    })
    .then(() => {
        console.log("blue color was completed")
        return newColor("blue", 1000);
    })
    .then(() => {
        console.log("green color was completed")
        return newColor("green", 1000);
    })
    .then(() => {
        console.log("yellow color was completed")
        return newColor("yellow", 1000);
    })
    .then(() => {
        console.log("orange color was completed")
        return newColor("orange", 1000);
    })
    .then(() => {
        console.log("red color was completed")
        return newColor("red", 1000);
    })
    .catch((error) => {
        console.log("Error:", error);
    })