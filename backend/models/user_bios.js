'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_bios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_bios.init({
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    store_name: DataTypes.STRING,
    user_login_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_bios',
  });
  return user_bios;
};