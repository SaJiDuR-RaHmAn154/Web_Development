const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }));//parsing url encoded data
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection successfull");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route

app.get("/chats", async (req, res) => {
    // find function asynchronous tai await korte hobe
    let chats = await Chat.find(); //DB er Chat collection er all data asbe
    // console.log(chats);
    res.render("index.ejs", { chats });
})
// New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

// Create route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        createdAt: new Date()
    })
    // then jekhane use korbo sekhane r await lekhar dorkar nai automatically asynchronous vabe kaj korbe
    newChat.save().then((res) => {
        console.log("Chat is saved");
    })
        .catch((err) => {
            console.log("Error");
        });
    res.redirect("/chats");
})

// Edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})
// Update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let {msg: newMsg } = req.body;

    // new:true will print updated value
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat)
    res.redirect("/chats");
});

// Destroy Route
app.delete("/chats/:id",async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


app.get("/", (req, res) => {
    res.send("Root");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})