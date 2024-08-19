
// We are going to send api req using js

// Using Fetch

// syntax : Fetch (url)

let url = "https://catfact.ninja/fact";

// check console->network portion ->fact(there will be a response in preview)
// console.log(fetch(url));// fetch method returns a promise

fetch(url)//check console
    .then((response) => {
        // console.log(response);
        // console.log(response.json());//this will also return an object
        return response.json();
    })
    .then((data) => { //method chaining(previous then j promise return korbe tar data print korahobe atate)
        console.log("Data1:", data);
        console.log(data.fact);//printing only the fact
        return fetch(url);// fetching another api call
    })
    .then((res) => {
        return res.json();//returning another promise
    })
    .then((data2) => {
        console.log("Data2:", data2);
    })
    .catch((err) => {//wrong url dile or response rejected hole ata kaj korbe
        console.log("Error:", err);
    })

console.log("Sajidur Rahman");//JS api calls er perform hoyar wait korbena.Tar porer kaj gulan korte thakbe(Advantage of promises(async))