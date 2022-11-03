'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles_in_loans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  articles_in_loans.init({
    articleIdArticles: DataTypes.INTEGER,
    loanIdLoan:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articles_in_loans',
  });
  return articles_in_loans;
};