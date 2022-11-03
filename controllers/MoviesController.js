const models = require("../models/index");
const MoviesController = {};

MoviesController.getMovies = async (req, res) => {
try {
    let resp = await models.movies.findAll()
    res.send(resp);
} catch (error) {
    res.send(error);
}
}

module.exports = MoviesController;