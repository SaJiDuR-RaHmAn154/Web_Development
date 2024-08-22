const { log } = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');//generates unique ids
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Index Route (GET req) -contains all the posts of the page
// Here resource = posts
// /resource ->format of writting api
// here resource will be a noun not a verb


let posts = [
    {
        id: uuidv4(),
        username: "Sajid",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "Sakib",
        content: "Hardwork is important"
    },
    {
        id: uuidv4(),
        username: "Steve",
        content: "I got selected!!!"
    },
];
// index route
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

// Create new post in two steps
// first rendering a form by clicking a buttton
app.get("/posts/new", (req, res) => {
    // form render korbe
    res.render("new.ejs");
})

// after submitting the form a post request will be sent
// based on that it will redirect to the index page
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });//new post will be added in the array(in practical life in DB)
    res.redirect("/posts");
})

// view route(viewing post individually)
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
})


// Update route using PATCH (editing specific post)
// override with the X-HTTP-Method-Override header in the request
// form submit korle post req patch req a override hosse internally 
app.use(methodOverride('_method'));

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");//redirected to the index page
})


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// DELETE operation using Destroy route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    // array theke oi post k filtered out kore dise
    posts = posts.filter((p) => id != p.id);//j post er sathe id match kortise na jegula filter hoye asbe
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`)
});

