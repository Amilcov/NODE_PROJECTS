const { database, user, password, host } = require('./index').db;

module.exports = {
    development: {
                    database,
                    username: user, 
                    password, 
                    host,
                    "dialect": "postgres",
                    "seederStorage": "sequelize"
                },
    production: {
                    database,
                    username: user, 
                    password, 
                    host,
                    "dialect": "postgres",
                    "seederStorage": "sequelize"
                }            
}