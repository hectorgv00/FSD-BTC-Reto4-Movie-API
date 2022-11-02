const express = require('express')
const router = express.Router()
const MoviesControllers = require('../controllers/MoviesControllers')

const db = require('../db/db')

router.get('/', MoviesControllers.getMovies)



module.exports = router