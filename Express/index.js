// This will act like a server

const express = require("express");
const app = express();//Server side er web application banabo ai app diyei(ata akta object)
// console.dir(app);

let port = 3000; //8080(free port)
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);//started server
});

// localhost:3000
// Sending request to the newly created server at localhost:3000

// app.use() ->sob request listen kore(sob path/route er response ai same dibe)

// app.use((req, res) => {
//     // console.log(req);//Object
//     console.log("Request received");

//     //---- Generating Response----

//     // res.send("This is a basic response");//string format
//     // Object format response(JSON format ao response deya jabe)

//     // res.send({
//     //     name:"Apple",
//     //     color:"Red"
//     // });

//     let code = "<div><h1>Fruits</h1> <ul><li>Mango</li><li>Orange</li></ul></div>";
//     res.send(code);
// });

// get method is used to send response to individual path mentioned in the parameter
// app.get("/",(req,res)=>{
//     res.send("Connected to root path");
// });
// app.get("/apple",(req,res)=>{
//     res.send("Connected to apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("Connected to orange path");
// });

// path match na korle ai response send korbe
// app.get("*",(req,res)=>{
//     res.send("This path doesn't exist");
// });

// app.post("/",(req,res)=>{
//     res.send("This is a post request to root");
// });

app.get("/", (req, res) => {
    res.send("Hi! I'm rooot");
});

// Path parameters
// Here username,id are variables

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);//Prints all the parameters sent from the request that is sent from hopscoth
    // // http://localhost:3000/Sajid/123 (from hopscoth)
    let { username, id } = req.params;
    res.send(`Welcome to the page of ${username} and the id is ${id}`);
    // html code o response hisebe send kora jabe
})

// Query string(of URL)
// http://localhost:3000/search?q=apple
// http://localhost:3000/search?q=orange

app.get("/search", (req, res) => {
    // sent value query te eshe store hoye jabe 
    let { q } = req.query;
    if (!q) {
        res.send("<h1>Nothing Searched</h1>")
    }
    else {
        res.send(`No results for query: ${q}`);
    }
})





