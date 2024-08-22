const mongoose = require('mongoose');

// 27017 this is the fixed port for MongoDB
// mongosh must backend a run kore rakhte hobe mongoDB er sathe connection establish korar jonno
// connect method is asynchronous and returns a promise(because db operations may take some time.So it will wait)
// check https://mongoosejs.com/ documentation(quick start)

// Establishing connection with MongoDB using mongoose
main()
    .then(() => { console.log("Successfully Connected"); })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Creating Schema (blueprint)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
// We use model to create documents for a Schema
// mongoose.model(collection_name(capital letter diye start),schema)
// User dile user hobe and plural hoye jabe automatically
// show collections (check in mongosh shell)

// const Employee = mongoose.model("Employee", userSchema);
const User = mongoose.model("User", userSchema);

// Inserting document in the collection
const user1 = new User({
    name: "Sajid",
    email: "sajid@gmail.com",
    age: 23
})
const user2 = new User({
    name: "Steve",
    email: "sajid@yahoo.com",
    age: 25
})
//to save this document to the mongoDB database(this save function returns a promise)
user1.save();
user2.save().then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    })

// insertMany
// User.insertMany([
//     { name: "Sakib", email: "sakib@yahoo.com", age: 20 },
//     { name: "Sajib", email: "sajib@yahoo.com", age: 30 },
//     { name: "Sarib", email: "sarib@yahoo.com", age: 50 }
// ]).then((res) => {
//     console.log(res)
// }).catch(err => console.log(err));

// https://mongoosejs.com/docs/queries.html
// find method
User.find({ age: { $gt: 40 } }).then((data) => {//it won't return a promise,returns an object but we can use .then() method in it
    console.log(data[0].name);
}).catch(err => console.log(err));

// User.findOne({_id:"667d6f56654825703509d389"}).then((data) => {//it won't return a promise but we can use .then() method in it
//     console.log(data);
// }).catch(err=>console.log(err));

// https://mongoosejs.com/docs/api/model.html

// User.findById("667d6f56654825703509d389").then((data) => {//it won't return a promise but we can use .then() method in it
//     console.log(data);
// }).catch(err => console.log(err));

// Update

// User.updateMany({name:"Steve"},{age:47}).then((res) => {//it won't return a promise but we can use .then() method in it
//     console.log(res);
// }).catch(err => console.log(err));

// User.findOneAndUpdate({name:"Steve"},{age:42},{new:true}).then((res) => {//it won't return a promise but we can use .then() method in it
//     console.log(res);
// }).catch(err => console.log(err));

// findByIdAndUpdate()

// Delete

User.deleteMany({ name: "Steve" }).then((res) => {//it won't return a promise but we can use .then() method in it
    console.log(res);
}).catch(err => console.log(err));

// findOneAndDelete()
// findByIdAndDelete()

// Schema Validations (Defining rules on Schemas)
