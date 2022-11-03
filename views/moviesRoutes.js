const express = require('express');
const router = express.Router();
const MoviesControllers = require('../controllers/MoviesControllers');

router.get('/toprated', MoviesControllers.getMoviesTopRated);
router.get('/genre/:genre', MoviesControllers.getMoviesGenre);
router.get('/title/:title', MoviesControllers.getMoviestitle);
router.get('/id/:id', MoviesControllers.getMoviesID);



module.exports = router;

