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

let timeoutId;
const onInput = event => {
    if(timeoutId) {                // see if it's defined
        clearTimeout(timeoutId);
    };
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500); // miliseconds are easily adjustable
};

input.addEventListener("input", onInput);
