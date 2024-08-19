
let name = ["Sajid", "Aman", "Antor", "Steve"];

let [winner, runner_up, ...others] = name;//storing array values in multiple variables

console.log(winner, runner_up);
console.log(others);//others er khetre rest er concept use hoise

// Destructuring objects

let students = {
    name: "Sajid",
    age: 23,
    class: 10,
    subjects: ["Hindi", "English", "Math", "Science"],
    username: "abcd",
    pass: "fhsfbhhf",
    place: "Rajshahi"
}

let { username, pass: secret, city = "Rangpur", place: location = "Dhaka" } = students;//array er khetre [] use kora hoy and akhetre {} and key use kora hoy
console.log(username, secret, city, location);//pass diye key match kore secret variable a content rakha hoise
// city normally dile undefined dibe jehetu defined nai
// place exist kore student er vitor so default ta na niye student er ta nibe