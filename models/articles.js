'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // articles.hasMany(models.movies)
      // articles.hasMany(models.series)
      articles.belongsToMany(models.loan, { through: 'articles_in_loans', foreignKey: 'articleIdArticles'})
    }
  }
  articles.init({
    id_articles: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1,20]
      }
    },
    summary: DataTypes.TEXT,
    date: DataTypes.DATE,
    
    poster: {
      type:DataTypes.STRING,
      allowNull: true,
      len:[1,255]
    },
  }, 
  {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};