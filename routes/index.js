var express = require('express');
var router = express.Router();

const fetch = require("node-fetch")
const apiKey = process.env.apiKey

router.get("/movies", (req, res) => {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    
    async function getMovies() {
        const response = await fetch(url);
        const movies = await response.json()
        return movies
    }

    getMovies().then(movies => {
        res.json({movies: movies.results})
    })
})

module.exports = router;
