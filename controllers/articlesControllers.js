const models = require('../models/index')

const articlesControllers = {}

articlesControllers.getArticles = async (req,res) => {
    let resp = await models.articles.findAll()
    res.send(resp)
}

module.exports = articlesControllers