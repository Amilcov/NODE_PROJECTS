'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      notEmpty: true
    },
    author: {
      allowNull: false,
      type:DataTypes.STRING(100),
      notEmpty: true
    },
    releaseDate: 
    { allowNull: false,
      type: DataTypes.DATEONLY
    },
    pageCount: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    publisher: {
      allowNull:false,
      type: DataTypes.STRING(100),
      notEmpty: true
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
