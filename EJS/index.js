const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// ejs will be used to create templates for websites
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => {
//     res.send("This is root");//sending response
// })

// EJS file render korate use hoy
// views alada akta file create kore sekhane ejs file create korte hoy
// ejs file a html,css,js mixed up kore lekha hoy

app.get("/", (req, res) => {
    // check localhost:8080 to render html page
    res.render("home");//views file mention korte hobena,express automatically khuje nibeviews file mention korte hobena,express automatically khuje nibe
})
app.get("/hello", (req, res) => {
    // // check localhost:8080/hello
    res.send("Hello!!");
})

// ----Passing data to EJS----
app.get("/roledice", (req, res) => {
    // // check localhost:8080/roledice
    let diceVal = Math.floor(Math.random() * 6) + 1;//considering this value is coming from a Database
    res.render("roledice.ejs", { diceVal });//key:value pair banaisi
})


// Instagram EJS(creating variable pages)
// Alada alada username er jonno alada alada page create hobe basic template er basis a
app.get("/ig/:username", (req, res) => {
    const followers = ["sajid", "sakib", "bob", "steve"];
    let { username } = req.params;
    // console.log(username);
    res.render("instagram", { username, followers });//passing as parameters
})

// Including static files with ejs files
// CSS,JS files use korar jonno
// public directory must thakte hobe(automatically available hobe express er kase.Directory likhar khetre public lekhar dorkar nai)
//  app.use(express.static("public"));(syntax)

app.use(express.static(path.join(__dirname,"public/css"))); //Bahire theke server run kora jabe
app.use(express.static(path.join(__dirname,"public/js"))); //Bahire theke server run kora jabe

// Instgram Task
// http://localhost:8080/cats
app.get("/:username", (req, res) => {
    const instaData = require("./data.json");//Database er data object akare niye nisi instaData te
    // console.log(instaData);
    const { username } = req.params;
    const data = instaData[username];
    console.log(data);
    if (data) {
        res.render("instagramTask.ejs", { data });//passing as parameters
    }
    else {
        res.render("error");
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})