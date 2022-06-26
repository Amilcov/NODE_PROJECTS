const {database, username, password, host} = require('./index').db;
   
module.exports = {
  development: {
    database,
    username,
    password,
    host,
    dialect: 'postgres'
  }
}