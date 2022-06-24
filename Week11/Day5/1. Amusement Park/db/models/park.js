'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Park.init({
    parkName: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    provinceState: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    opened: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    size: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Park',
  });
  return Park;
};