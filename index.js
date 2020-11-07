const fetchData = async () => {
    const respones = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "edb2b3a0",
            s: "avengers" // stands for search property
        }
    });
    console.log(respones.data);
};
fetchData();
