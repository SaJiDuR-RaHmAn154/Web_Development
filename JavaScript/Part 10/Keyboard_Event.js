let btn = document.querySelector('button');

//----Agula Mouse Event----


// btn.addEventListener("click", function (event) {//akta default argument thakbe(event/e/evt name a)
//     console.log("Button Clicked");
//     console.log(event);//a lot of properties inside it(check console) -ata akta pointer event
// });

// btn.addEventListener("dblclick", function (event) {//ata akta mouse event
//     console.log(event);
//     console.log("Button Clicked");
// });


// ----Keyboard Event(check from mdn)----

// keydown event - key press korle(any key)
// keyup event - key press kore sere dile

let inp = document.querySelector('input');

inp.addEventListener("keydown", function (event) {
    console.log("Key was pressed");
    console.log(event);//check console(keyboard event show korbe)
    console.log(event.code);
    console.log(event.key);
});
inp.addEventListener("keydown", function (event) {
    console.log("Key was released");//(code and key important-from console)
    console.log(event);
    console.dir(event);
});

// code - kon key press korsi eta dekhabe
// key - shows the thing that is shown in the screen