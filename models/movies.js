'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      movies.hasMany(models.articles);

    }
  }
  movies.init({
    id_movies:{
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
    duration: {
      type: DataTypes.STRING,
      validate:{
        len:[3,30]
      }
    },
    rank: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};