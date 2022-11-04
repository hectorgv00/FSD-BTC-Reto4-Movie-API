const express = require('express');
const router = express.Router();
const moviesRoutes = require('./routes/moviesRoutes');
const seriesRoutes = require('./routes/seriesRoutes');
const userRoutes = require('./routes/userRoutes');

// TODO: crear los controladores


router.use('/movies', moviesRoutes);
router.use('/series', seriesRoutes);
router.use('/users', userRoutes);


module.exports = router

