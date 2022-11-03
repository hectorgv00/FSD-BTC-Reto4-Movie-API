const express = require('express');
const router = express.Router();
const moviesRoutes = require('./views/moviesRoutes')




router.use('/movies', moviesRoutes);


module.exports = router

