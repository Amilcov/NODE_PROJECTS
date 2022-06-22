'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
          notNull: {
            msg: 'Please provide a value for Title'
          }, 
          notEmpty: {
            msg: 'Please provide a value for Title'
          }, 
          len: {
            args: [0, 255],
            msg: 'Title must not be more than 255 characters long'
          }
      }
   
    },
    author: {
      allowNull: false,
      type:DataTypes.STRING(100),
      validate: {
          notNull: {
            msg: 'Please provide a value for Author'
          }, 
          notEmpty: {
            msg: 'Please provide a value for Author'
          }, 
          len: {
            args: [0, 255],
            msg: 'Author must not be more than 255 characters long'
          }
      }
   },
    releaseDate: { 
      allowNull: false,
      type: DataTypes.DATEONLY,
      validate: {
          notNull: {
            msg: 'Please provide a value for Release Date'
          },  
          isDate: {
            msg: 'Please provide a valid date for Release Date (YYY-MM-DD)'
          }
      }
    },
  pageCount: {
      allowNull:false,
      type: DataTypes.INTEGER,
      validate: {
          notNull: {
            msg: 'Please provide a value for Page Count'
          }, 
          isInt: {
            msg: 'Please provide a valid integer for Page Count'
          }
       }

    },
  publisher: {
      allowNull:false,
      type: DataTypes.STRING(100),
      validate: {
          notNull: {
            msg: 'Please provide a value for Publisher'
          }, 
          notEmpty: {
            msg: 'Please provide a value for Publisher'
          }, 
          len: {
            args: [0, 100],
            msg: 'Publisher must not be more than 100 characters long'
          }
      }
    }

  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};



/*------------------------- INITIAL VERSION------------------------

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

*/