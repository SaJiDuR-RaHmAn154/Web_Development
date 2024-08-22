const express = require("express");
const app = express();

// nodemon index.js
// middleware -> response send korteo pare
// https://expressjs.com/en/5x/api.html#app.use
// https://expressjs.com/en/guide/using-middleware.html (For middleware guides)

// middlewares app.use() diyei define korte hoy
// jekono incoming request er jonno same response pathay dibe ai middleware
app.use((req, res, next) => {
    // http://localhost:8080?query=abcd
    // let {query} = req.query;
    // console.log(query);
    console.log("Hi I'm 1st middleware");
    // res.send("Middleware finished");//response send na korle next() call korte hobe
    next();//this next function will transfer the control to the next response that should be performed
    console.log("This is after next"); //atao execute hobe but ata proper developer er kaj na
});

// jekono request aslei age middlewares run hobe then baki response
// vul path dileo middlewares run hobe
app.use((req, res, next) => {
    console.log("Hi I'm 2nd middleware");
    return next();
    console.log("abcd");// ata execute hobena return lekhay
});

// app.use a specific path mention kora jabe
app.use("/middle",(req, res, next) => {
    // ai middleware just http://localhost:8080/middle path ai execute hobe
    console.log("Hi I'm 3rd middleware");
    return next();
});

// Error handling middleware
app.use((req,res)=>{
    res.status(404).send("404 not founnd")
})

app.get("/random", (req, res) => {
    res.send("This is a random page")
})
app.get("/", (req, res) => {
    res.send("root")
})
app.listen(8080, () => {
    console.log("listening to the port 8080");
});