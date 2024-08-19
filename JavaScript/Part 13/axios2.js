let btn = document.querySelector('button');
let url = "https://dog.ceo/api/breeds/image/random";

// Free APIs has some limits. Like 1 min a 15ta call korte parbo arokom.So, API ke loop er under a na use kora better
btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector('#result');
    img.setAttribute("src", link);
    console.log(link);
})

async function getImage() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data.message);
        return res.data.message;//data er message er vitore image er url ase
    }
    catch (err) {
        console.log("Error:", err);
        return "No image found";
    }
}
getImage();