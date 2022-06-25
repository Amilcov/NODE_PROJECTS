const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const { environment } = require('./config/index');
const cookieParseer = require('cookie-parser'); 



const app = express();
const isProduction = environment === 'production';


app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(cookieParseer());
app.use(express.urlencoded({extended: false}));




app.use(routes);

app.use((req, res, next) => {
  //Route handle for Catch all routes that do not have a handler declared and create an error object in this case'
  const error = new Error("The requests page couldn't be found.");
  error.status = 404;
  next(error);
});



app.use((err, req, res, next) => {
    if (!isProduction) console.error(err); 
    next(err);
});

app.use((err, req, res, next) => {
    if(err.status === 404) {
        res.status(404);
        res.render('page-not-found', {title: "Page Not Found"});
    } else {
        next(err);
    }
});


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
       title: 'Server Error',
       message: isProduction ? null : err.message,
       stack: isProduction ? null : err.stack
    });
    
});


module.exports = app;

