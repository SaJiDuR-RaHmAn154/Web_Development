const mongoose = require("mongoose");

// chat collection schema akhane create korbo
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 50
    },
    createdAt: {
        type: Date,
        required: true
    }
});

// DB a chats model create hobe
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
