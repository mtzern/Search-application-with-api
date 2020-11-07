const fetchData = async () => {
    const respones = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "edb2b3a0",
            i: "tt0848228" // get information about single movie
        }
    });
    console.log(respones.data);
};
fetchData();
