
let form = document.querySelector('form');

// obj.addEventListener("event",callback function);(syntax)

form.addEventListener("submit", function (event) { //submit event
    event.preventDefault();//ata use korar fole action jukto url a redirect hobena ar

    // Extracting Form Data
    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');

    console.dir(user);
    console.dir(pass);
    console.log(user.value);//keyboard theke ja input deya hobe seta print hobe
    console.log(pass.value);
    alert(`Hi ${user.value},your password is set to ${pass.value}`);

    // Direct acces using form object
    console.dir(form);
    console.log(this.elements[0].value); //querySelector use na koreo direct form object diye form er internal elements er value set kora jabe
    console.log(this.elements[1].value);
});


