const { Op } = require("sequelize");
const models = require("../models/index");
const SeriesEndpoints = {};

// Encuentra series por id


SeriesEndpoints.getSeriesID = async (req, res) => {
    try {
      let { id } = req.params;
      let resp = await models.series.findAll({
        where: {
          id_series: id,
        },
      });
      res.send(resp);
    } catch (error) {
      res.send(error);
    }
  };

// Encuentra las series mejor valoradas


SeriesEndpoints.getSeriesTopRated = async (req, res) => {
    try {
        let resp = await models.series.findAll({where:{
            rank:{
                [Op.gt]: 8
            }
        }});
        res.send(resp);
      } catch (error) {
        res.send(error);
      }
};

// Encuentra las series por título


SeriesEndpoints.getSeriestitle = async (req,res) =>{
    try {
      let { title } = req.params;
          let resp = await models.series.findAll({
              where:{
                  title: title
                  }
              }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}

// Encuentra las series por capitulo emitido

SeriesEndpoints.getSeriesEmitido = async (req,res) =>{
    try {
          let resp = await models.series.findAll({
              where:{
                next_7_days: true
                  }
              }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}

// Encuentra las series por capitulo cinema

SeriesEndpoints.getSeriesCinema = async (req,res) =>{
    try {
          let resp = await models.series.findAll({
              where:{
                is_on_cinema: true
                  }
              }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}

module.exports = SeriesEndpoints;