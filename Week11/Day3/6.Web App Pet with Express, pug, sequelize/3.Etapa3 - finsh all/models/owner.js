'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const mappingColumns = {
        through : "PetOwner",
        foreignKey: "ownerId",
        otherKey: "petId"
      };

      Owner.belongsToMany(models.Pet, mappingColumns);
    }
  }
  Owner.init({
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};