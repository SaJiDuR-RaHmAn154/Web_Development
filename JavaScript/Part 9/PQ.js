let para = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para1 = document.createElement('p');

let body = document.querySelector('body');

para.innerText = "Hey I'm red!"
para.classList.add('red');

h3.innerText = "I'm blue h3!"
h3.style.color = 'blue'; //avabeo style kora jay

div.classList.add('box');


h1.innerText = "I'm in a div";
para1.innerText = "ME TOO!";


body.append(para);
body.append(h3);

div.append(h1);
div.append(para1);
body.append(div);