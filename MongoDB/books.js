const mongoose = require('mongoose');
main()
    .then(() => { console.log("Successfully Connected"); })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// https://mongoosejs.com/docs/api/schematype.html
// required == NOL NULL

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"]//Custom error message
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"] //ai category bade onno kono category accept korbena
    }
})

const Book = mongoose.model("Book", bookSchema);

// use amazon
// db.books.find()

// Validation error dibe title na dile

let book1 = new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200,
    maxLength: 20
});
let book2 = new Book({
    title: "How to kill a MockingBird",
    price: 1200
});
let book3 = new Book({
    title: "Gone 99",
    price: 1200
});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

book2.save().then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

book3.save().then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

// Validation failed asbe jehetu runValidators true kora ase
// Against the schema set kora hole error dibe

Book.findOneAndUpdate({ title: "Mathematics XII" }, { price: -500 }, { runValidators: true }).then((res) => console.log(res)).catch((err) => {
    console.log(err.errors.price.properties.message);//error properties show korbe
})

