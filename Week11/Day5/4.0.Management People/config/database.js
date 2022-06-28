const { database, user, password, host } = require('./index').db;

module.exports = {
  "development": {
    database,
    user,
    password, 
    host,
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  
}
