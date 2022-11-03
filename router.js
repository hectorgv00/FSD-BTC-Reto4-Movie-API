const express = require('express');
const router = express.Router();
const moviesRoutes = require('./views/moviesRoutes')
const seriesRoutes = require('./views/seriesRoutes')

// TODO: crear los controladores


router.use('/movies', moviesRoutes);
router.use('/series', seriesRoutes);


module.exports = router

