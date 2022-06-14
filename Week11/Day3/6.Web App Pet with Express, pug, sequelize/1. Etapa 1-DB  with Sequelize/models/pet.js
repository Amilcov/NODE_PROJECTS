'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.PetType, {"foreignKey": "petTypeId"});
      
      const mappingColumns = {
        through: "PetOwner",
        foreignKey: "petId",
        otherKey: "ownerId"
      };

      Pet.belongsToMany(models.Owner, mappingColumns);

    }
  }
  Pet.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      notEmpty: true
    },
    petTypeId: {
      allowNull: false,
      "type": DataTypes.INTEGER
    },
    age: {
      "type": DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};