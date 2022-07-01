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


app.use((req, res, next) => {
    req.setTimeout(1000, () => {
        res.status(500).end();
    });
    res.setTimeout(1000, () =>{
        res.status(500).end();
    });

    next();
});

/*
app.use((error, req, res, next) => {
   res.send(error);
   next();
});
*/

module.exports = app