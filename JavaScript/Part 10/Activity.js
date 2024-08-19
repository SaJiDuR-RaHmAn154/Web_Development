// One type of PQ
// Random Color Generator

let btn = document.querySelector('button');

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click", function () {
    let h3 = document.querySelector('h3');
    let randomColor = getRandomColor();
    let div = document.querySelector('div');

    h3.innerText = randomColor;
    div.style.backgroundColor = randomColor;
    console.log("Color Updated");
});
