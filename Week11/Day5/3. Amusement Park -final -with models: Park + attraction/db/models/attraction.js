'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attraction.belongsTo(models.Park, {"foreignKey": "parkId"});
    }
  }
  Attraction.init({
    parkId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    attractionName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    theme: {
      allowNull: false,
      type: DataTypes.STRING
    },
    opened: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    ridersPerVehicle: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    visitedOn: {
      type: DataTypes.DATEONLY
    },
    raiting: {
      type: DataTypes.INTEGER
    },
    comments: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Attraction',
  });
  return Attraction;
};