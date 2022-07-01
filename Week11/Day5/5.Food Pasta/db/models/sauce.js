'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sauce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sauce.hasMany(models.Pasta, {"foreignKey": "sauceId"});
    }
  }
  Sauce.init({
    name: { 
      type: DataTypes.STRING,
      notEmpty: true
    },
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sauce',
  });
  return Sauce;
};