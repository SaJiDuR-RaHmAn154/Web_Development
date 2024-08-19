
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();//both returns a promise.As they are called inside async function so,await keyword should be used to get the response
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();//another api call is executing
        console.log(data2.fact);
    }
    catch (e) {
        console.log("Error:", e);//wrong url dile catch block kaj korbe
    }
}

getFacts();
console.log("Sajidur Rahman");
