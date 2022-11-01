'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      loan.belongsToMany(models.articles, { through: 'articles_in_loans', foreignKey:'loanIdLoan'})
      loan.belongsTo(models.user);

    }
  }
  loan.init({
    id_loan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date_of_loan: DataTypes.DATE,

    userIdUser: {
      type: DataTypes.INTEGER,
      
        references: {
          model: 'users',
          key: 'id_user'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      
    }
  }, {
    sequelize,
    modelName: 'loan',
  });
  return loan;
};