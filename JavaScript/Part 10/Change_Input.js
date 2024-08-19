let inp = document.querySelector('input');
let par = document.querySelector('p');

//input event er khetre jekono key press korle setar value console a dekhabe 
// r change event er khetre type korar por box theke cursor soray felle (onno kothao click korle) jetuku final string ota dekhabe console a


// inp.addEventListener('change',function(){
//     par.innerText = inp.value;
//     console.log(inp.value);
// });

inp.addEventListener('input', function () {
    par.innerText = inp.value;
    console.log(inp.value);
});