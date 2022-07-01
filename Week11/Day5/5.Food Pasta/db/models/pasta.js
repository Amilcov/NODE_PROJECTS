'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pasta.belongsTo(models.Noodle, {"foreignKey": "noodleId"});
      Pasta.belongsTo(models.Sauce, {"foreignKey": "sauceId"});
    }
  }
  Pasta.init({
    label: { 
      allowNull: false,
      type: DataTypes.STRING,
      notEmpty: false
    },
    description: {
       allowNull: false,
       type: DataTypes.TEXT, 
       notEmpty: false
    },
    taste: { 
      allowNull: false,
      type: DataTypes.DECIMAL,
      notEmpty: false
    }
  }, {
    sequelize,
    modelName: 'Pasta',
  });
  return Pasta;
};