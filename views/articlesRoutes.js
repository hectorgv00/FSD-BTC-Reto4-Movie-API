const express = require('express')
const router = express.Router()
const articlesController = require('../controllers/articlesControllers')

const db = require('../db/db')

router.get('/', articlesControllers.getArticles)



module.exports = router