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
      // define association here
    }
  }
  series.init({
    id_series:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_articles: DataTypes.INTEGER,
    episodes: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    seasons: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'series',
  });
  return series;
};