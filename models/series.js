'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      series.hasMany(models.articles);
    }
  }
  series.init({
    id_series:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
  //   articleIdArticles: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //         model: 'articles',
  //         key: 'id_articles'
  //     }
  // },
    episodes: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    seasons: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'series',
  });
  return series;
};