module.exports = {
   environment: process.env.NODE_ENV || 'development',
   port: process.env.PORT || 8081,
   db: {
       database: process.env.DB_DATABASE,
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSWORD,
       host: process.env.DB_HOST,
   }
}