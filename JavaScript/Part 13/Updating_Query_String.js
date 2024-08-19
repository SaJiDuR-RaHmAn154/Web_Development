
const url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');



function show(colleges) {
    let list = document.querySelector('#list');
    list.innerText = "";
    for (college of colleges) {
        let li = document.createElement('li');//creating list items and appending the,
        li.innerText = college.name;
        list.appendChild(li);
    }
}
async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        // console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log("Error:", err);
        return [];//empty array
    }
}

btn.addEventListener("click", async () => {
    let country = document.querySelector('input').value;
    // console.log(country);
    let colleges = await getColleges(country);
    // console.log(colleges);
    show(colleges);
})
getColleges();