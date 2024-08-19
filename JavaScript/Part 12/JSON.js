//           -----JSON(Javascript Object Notation)------

// www.json.org (website for json to know about json in details)
// previous return format of api data was XML but now in JSON format(this is quite similar to js object but not properly a js object)
// JSON a all key string hoy(****)
//JSON a undefined bole kisu thake na(****)
// JSON validators (to check whether a JSON format is valid or not)

//                -----Accessing JSON data-------

let jsonRes = '{ "fact": "All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads." }';//copied from catfact.ninja/fact

let validRes = JSON.parse(jsonRes); //(This fucntion parse a string data into a JS object)
console.log(validRes);//check console to check the object
console.log(validRes.fact);

// JSON.stringify(json) -> this method parse a object data into JSON

let student = {
    name: "Sajid",
    marks: 95
};

console.log(JSON.stringify(student)); //JSON data akta string hoye thake check console