const MoviesControllers = {};
const models = require("../models/index");

MoviesControllers.getMovies = async (req, res) => {
    let resp = await models.movies.findall()
    res.send(resp);
}

module.exports = MoviesControllers;