const url = "https://icanhazdadjoke.com/";
// we will use headers to get specific format data from API

async function getJokes() {
    try {
        const header = { headers: { Accept: "application/json" } };//object pass korte hobe header er
        let res = await axios.get(url,header);
        // console.log(res.data);//By default HTML format a data astise
        console.log(res.data.joke);

    }
    catch (err) {
        console.log("Error:", err);
    }
}

getJokes();//check console