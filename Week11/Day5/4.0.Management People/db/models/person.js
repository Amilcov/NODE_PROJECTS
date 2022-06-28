'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Person.init({
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please allow a value for First Name'
        },
        notEmpty: {
          msg: 'Please allow a value for First Name'
        },
        len: {
          args: [0, 50],
          msg:  'First Name must not be more than 50 characters long'
        }
      }
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Please allow a value for Last Name'
        },
        notEmpty: {
           msg: 'Please allow a value for Last Name'
        },
        len: {
          args: [0, 50],
          msg:  'Last Name must not be more than 50 characters long'
        }
      }
    },
    age: DataTypes.INTEGER,
    biography: DataTypes.TEXT,
    hairColorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Hair Color can not be null'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};