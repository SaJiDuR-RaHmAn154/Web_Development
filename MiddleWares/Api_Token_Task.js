const express = require("express");
const app = express();

// nodemon Api_Token_Task
// http://localhost:8080/api

// app.use("/api", (req, res, next) => {
//     // http://localhost:8080/api?token=giveaccess (ai route pass korlei response a data send korbe otherwise access denied show korbe)
//     // User authentication
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     else {
//         res.send("ACCESS DENIED");
//     }
// })


//Passing this middleware in the function 
const checkToken = ("/api", (req, res, next) => {
    // http://localhost:8080/api?token=giveaccess (ai route pass korlei response a data send korbe otherwise access denied show korbe)
    // User authentication
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    else {
        res.send("ACCESS DENIED");
    }
})
// /api a request asle checkToken validation hobe then setar next call hole data show korbe
app.get("/api", checkToken, (req, res) => {
    res.send("data");
});


app.get("/", (req, res) => {
    res.send("root");
});
app.listen(8080, () => {
    console.log("listening to the port 8080");
});