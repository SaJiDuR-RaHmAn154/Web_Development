// Library to make http request (fetching data using axios)

// *******axios.gitHub a jeye axios install o kora jabe*****

// ai khetre amra just CDN link use korbo(in index.html file)
// we use axios instead of fetch method as it provides exactly the data we wanted. We don't need to parse.

let url = "https://catfact.ninja/fact";
let btn = document.querySelector('button');

btn.addEventListener("click", async () => {
    let fact = await getFacts();//as async function returns a promise so here we also should use await keyword
    console.log(fact);
    let p = document.querySelector('p');
    p.innerText = fact;//after clicking the button,a new fact will be printed in the screen
})

async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data.fact);//data parse korar step axios use koray r korte hobena(we can directly access the JSON data)
        return res.data.fact;
    }
    catch (err) {
        console.log("Error:", err);
        return "No fact found";
    }
}


// getFacts();//check console






