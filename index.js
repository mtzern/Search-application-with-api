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
const debounce = (callback, delay = 1000) => {
    let timeoutId;
    return (...arguments) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback.apply(null, arguments); // apply detects automatically how many arguments are neccessary
        }, delay);
    };
};

const onInput = event => {
        fetchData(event.target.value);
};
input.addEventListener("input", debounce(onInput, 700));
