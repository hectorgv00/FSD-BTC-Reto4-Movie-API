const express = require('express')
const router = express.Router()

const ClientesRoutes = require('./views/clientesRoutes')


//middleware para las rutas de usuario
router.use('/clientes', ClientesRoutes)


module.exports = router