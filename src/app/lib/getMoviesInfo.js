const getMoviesInfo = async () => {
    const url = process.env.RAPID_API_URL;
    const apiKey = process.env.RAPID_API_KEY;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
        },
    };

    const res = await fetch(url, options);

    return res.json();
}

export default getMoviesInfo;