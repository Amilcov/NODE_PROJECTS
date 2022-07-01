'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noodle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Noodle.hasMany(models.Pasta, {"foreignKey": "noodleId"})
    }
  }
  Noodle.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    isStuffed: {
      allowNull: false,
      type: DataTypes.BOOLEAN}
  }, {
    sequelize,
    modelName: 'Noodle',
  });
  return Noodle;
};