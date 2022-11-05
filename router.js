const express = require('express');
const router = express.Router();
const moviesRoutes = require('./routes/moviesRoutes');
const seriesRoutes = require('./routes/seriesRoutes');
const userRoutes = require('./routes/userRoutes');
const userFindRoutes = require('./routes/userFindRoutes');
const { authBearerMiddleware, isValidRoleAdmin } = require("./middleware/auth.middleware")


// TODO: crear los controladores


router.use('/movies', moviesRoutes);
router.use('/series', seriesRoutes);
router.use('/users', userRoutes);
router.use('/findusers', authBearerMiddleware, userFindRoutes);


module.exports = router

