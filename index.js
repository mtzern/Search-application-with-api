const fetchData = async (searchTerm) => {
    const respones = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "edb2b3a0",
            s: searchTerm // search for particular movie, not ID ("i")
        }
    });
    console.log(respones.data);
};

const input = document.querySelector("input");
input.addEventListener("input", (event) => { //input event listener gives a chance to see every time user change a text.
    fetchData(event.target.value); // gives access to changed text
});
