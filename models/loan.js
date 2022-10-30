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
      // define association here
    }
  }
  loan.init({
    id: DataTypes.INTEGER,
    date_of_loan: DataTypes.DATE,
    id_user: {
      type: DataTypes.INTEGER,
      references:{
        references: {
          model: 'user',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    }
  }, {
    sequelize,
    modelName: 'loan',
  });
  return loan;
};