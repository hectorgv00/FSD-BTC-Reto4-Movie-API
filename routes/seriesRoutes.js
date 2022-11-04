const express = require('express');
const router = express.Router();
const SeriesEndpoints = require('../endpoints/seriesEndpoints');


router.get('/toprated', SeriesEndpoints.getSeriesTopRated);
router.get('/emision/', SeriesEndpoints.getSeriesEmitido);
router.get('/cinema/', SeriesEndpoints.getSeriesCinema);
router.get('/:id', SeriesEndpoints.getSeriesID);
router.get('/title/:title', SeriesEndpoints.getSeriestitle);


module.exports = router;
