'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles_loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  articles_loan.init({
    id_articles: DataTypes.INTEGER,
    id_loan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articles_loan',
  });
  return articles_loan;
};