const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main().then(() => {
    console.log("connection successfull");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Demo database documents
let allChats=[
    {
        from: "Sajid",
        to: "Sakib",
        msg: "Send me your notes",
        createdAt: new Date()
    },
    {
        from: "Rohit",
        to: "Mohit",
        msg: "Teach me callbacks",
        createdAt: new Date()
    },
    {
        from: "Amit",
        to: "Sumit",
        msg: "All the best!",
        createdAt: new Date()
    },
    {
        from: "Anita",
        to: "Ramesh",
        msg: "bring me some fruits",
        createdAt: new Date()
    },
    {
        from: "Tony",
        to: "Peter",
        msg: "Send me your exam sheets",
        createdAt: new Date()
    },
]

Chat.insertMany(allChats);