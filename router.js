const express = require('express')
const router = express.Router()

const MoviesControllers = require('./views/MoviesControllers')


//middleware para las rutas de usuario
router.use('/movies', MoviesControllers)


module.exports = router