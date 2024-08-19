// ----Events are signals that something has occured.(Mouse click actions)

// -----onclick event(onclick event trigger holei function kaj korbe)
let btns = document.querySelectorAll('button');
console.dir(btns);


// btn.onclick = function () {
//     console.log('Button was clicked');
//     alert('Button was clicked');
// };

function sayHello() {
    alert('Hello');
}

function sayName() {
    alert('Sajidur Rahaman')
}
//---- onmouseenter (hover korle kono event trigger korte ata use kora hoy)

// for (btn of btns) {
//     btn.onclick = sayHello; //Similar as before(function er name dibo just () dibona karon execute age hoye jabe nahole)
//     btn.onmouseenter = function () {
//         console.log('you entered a button');//check console
//     }
// }


//----- Event Listener(addEventListener)------

// onclick er value only 1tai set kora jete pare multiple valid na
// event listener diye multiple event set kora jete pare(multiple function run korano jete pare)
// event(click,drag,keyboard key press)


for (btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);//Multiple events can be performed
    btn.addEventListener("dblclick", function () { //single click er duita comment kore check
        console.log('You double clicked me');
    });
    //check MDN for event types and events(https://developer.mozilla.org/en-US/docs/Web/Events)
}


// Event listeners on different elements

let para = document.querySelector('p');

para.addEventListener("click", function () {
    alert('Paragraph is clicked');
})

let div = document.querySelector('.box');
console.dir(div);

div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "blue";
    console.log("Mouse inside box");
});

// this keyword in Event Listeners

let butn = document.querySelector('.this');
let par = document.querySelector('p');

function changeColor() {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = 'blue';
}

// butn.addEventListener("click", function () {
//     console.log(this); //console a button display hobe(akhane this butn object k point kortise)
//     console.dir(this);
//     this.style.backgroundColor ='blue'; //this points the object
// });

butn.addEventListener("click", changeColor);//removed the repetition of same task using the same function
par.addEventListener("click", changeColor);