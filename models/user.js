'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type:DataTypes.STRING,
      validate:{
        len:[1,20]
      }
    },
    surname: {
      type:DataTypes.STRING,
      validate:{
        len:[1,20]
      }
    },
    document: {
      type:DataTypes.STRING,
      validate:{
        len:[1,9]
      }
    },
    address: {
      type:DataTypes.STRING,
      validate:{
        len:[1,20]
      }
    },
    email: {
      type:DataTypes.STRING,
      validate:{
        len:[1,20]
      }
    },
    id_rol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};