const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();
const cookieParser = require('cookie-parser');


app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(routes);



//general ROUTE handler for unmatched requests
app.use((req, res, next) => {
   const err = new Error ('The requested page could not be found!');
   err.status(404);
   next(err);
});


app.use((err, req, res, next) => {
    try{
    } catch (err){
    };
    next(err);
})

//custom error handles - to log errors
app.use((err, req, res, next) => {
   if(process.env.NODE_ENV === 'production') {
       //to do log err to db
   } else {
      console.log(err);
   }
   next(err);
});

//custom error handles - to handle errors 'Page not found'
app.use((err, req, res, next) => {
    if(err.status === 404) {
        res.status(404);
        res.render('page-not-found', {title: "Page not found"});
    } else {
      next(err);
    }  
});

//custom error handles - generic handle - to handdle any error
app.use((err, req, res, next) => {

    res.status(err.status || 500);
    const isProduction = process.env.NODE_ENV === 'production';
    res.render('error', {
        title: "Server error",
        message: isProduction ? null : err.message,
        stack: isProduction? null : err.stack
    });
});





module.exports = app;
