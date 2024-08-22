const figlet = require("figlet");

//  node index.js
// figlet is used to print data in command line whose code is written by someone already
// package.json er moddhe all dependencies listed thake. So,node modules delete hoye geleo pore package.json er dara node module install kora jabe
// npm init diye nijer package.json create kora jay

figlet("Sajidur Rahman Tarafder!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });