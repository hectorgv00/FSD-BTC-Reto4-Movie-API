const express = require('express');
const router = express.Router();
const MoviesEndpoints = require('../endpoints/moviesEndpoints');

router.get('/toprated', MoviesEndpoints.getMoviesTopRated);
router.get('/genre/:genre', MoviesEndpoints.getMoviesGenre);
router.get('/title/:title', MoviesEndpoints.getMoviestitle);
router.get('/id/:id', MoviesEndpoints.getMoviesID);



module.exports = router;

