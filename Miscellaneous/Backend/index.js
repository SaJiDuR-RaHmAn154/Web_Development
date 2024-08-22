const express = require("express");
const app = express();
const port = 8080;

// http://localhost:8080/register
// Frontend theke j data astise segulo backend a astise(after form submission)
// Backend theke setar upor basis kore response generate kora hosse
app.get("/register", (req, res) => {
    let { user, pass } = req.query;//query string er through te backend a asbe jetake deconstruct kore nisi
    res.send(`Standard GET response. Welcome ${user}!!!`);
})

// Handling post request
// post request data backend a query string er through te asena(URL encoded format a asbe)
// form er data req.body er vitore ase jetake parse kora lagbe express k bujhanor jonno
// we are using middleware here in app.use

app.use(express.urlencoded({ extended: true }));//parsing req.body(urlencoded data)
app.use(express.json());//JSON format a data post korle setao parse korbe 

app.post("/register", (req, res) => {
    // console.log(req.body);//object print hobe backend server a
    let { user, pass } = req.body;
    res.send(`Standard POST response. Welcome ${user}!!!`);
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})
