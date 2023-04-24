const getMovieInfo = async (movieId) => {
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${movieId}&lang=en`;
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

export default getMovieInfo;